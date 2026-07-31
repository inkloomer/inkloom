import {spawn} from 'node:child_process';
import {mkdtemp, mkdir, readFile, readdir, rename, rm, stat, writeFile} from 'node:fs/promises';
import {homedir, tmpdir} from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {bundle} from '@remotion/bundler';
import {getCompositions, openBrowser, renderFrames} from '@remotion/renderer';
import sharp from 'sharp';

sharp.cache(false);

const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');
const COMPONENTS_ROOT = path.join(PROJECT_ROOT, 'src', 'components');
const PUBLIC_ROOT = path.join(PROJECT_ROOT, 'public', 'animation-webp');
const ANIMATION_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const SCENE_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const WEBP_QUALITY = 45;
const WEBP_WIDTH = 1280;
const WEBP_TARGET_FPS = 15;
const WEBP_LOOP_COUNT = 1;
const animationDirectories = new Map();

const usage = `
Render every stable scene range as a once-playing animated WebP.

Usage:
  pnpm animation:publish-webp
  pnpm animation:publish-webp legal-jurisdiction
  pnpm animation:publish-webp proper-party party-change

Output:
  public/animation-webp/<animation-id>/<scene-id>.webp

Encoding contract:
  WebP q${WEBP_QUALITY}, ${WEBP_WIDTH}px wide, ${WEBP_TARGET_FPS}fps target, loop count ${WEBP_LOOP_COUNT}
`;

const parseArguments = (rawArguments) => {
  const animationIds = rawArguments.filter((argument) => argument !== '--');
  if (animationIds.includes('--help')) return {help: true};
  const unknownOption = animationIds.find((argument) => argument.startsWith('--'));
  if (unknownOption) throw new Error(`Unknown option: ${unknownOption}`);
  return {animationIds, help: false};
};

const fileExists = async (filePath) => {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
};

const pathExists = async (targetPath) => {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
};

const findBrowserExecutable = async () => {
  const configuredExecutable = process.env.REMOTION_BROWSER_EXECUTABLE;
  const homeDirectory = homedir();
  const candidates = [
    configuredExecutable,
    ...(process.platform === 'win32'
      ? [
          'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
          'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
          path.join(homeDirectory, 'AppData', 'Local', 'Google', 'Chrome', 'Application', 'chrome.exe'),
          path.join(homeDirectory, 'AppData', 'Local', 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
        ]
      : []),
    ...(process.platform === 'darwin'
      ? [
          '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
        ]
      : []),
    ...(process.platform === 'linux'
      ? ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge']
      : []),
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (await fileExists(candidate)) return candidate;
  }

  return null;
};

const discoverAnimationDirectories = async (directory, depth = 0) => {
  const entries = await readdir(directory, {withFileTypes: true});

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const candidateDirectory = path.join(directory, entry.name);
    if (ANIMATION_ID_PATTERN.test(entry.name)) {
      const remotionDirectory = path.join(candidateDirectory, 'remotion');
      const hasEntry = await fileExists(path.join(remotionDirectory, 'index.ts'));
      const hasStoryboard = await fileExists(path.join(remotionDirectory, 'storyboard.ts'));
      if (hasEntry && hasStoryboard) {
        const previousDirectory = animationDirectories.get(entry.name);
        if (previousDirectory && previousDirectory !== candidateDirectory) {
          throw new Error(`Duplicate animation ID "${entry.name}" found in ${previousDirectory} and ${candidateDirectory}.`);
        }
        animationDirectories.set(entry.name, candidateDirectory);
        continue;
      }
    }

    if (depth < 4) await discoverAnimationDirectories(candidateDirectory, depth + 1);
  }
};

const discoverAnimationIds = async () => {
  animationDirectories.clear();
  await discoverAnimationDirectories(ANIMATIONS_ROOT);
  return [...animationDirectories.keys()].sort();
};

const getAnimationDirectory = (animationId) => {
  const directory = animationDirectories.get(animationId);
  if (!directory) throw new Error(`Animation not found or incomplete: ${animationId}`);
  return directory;
};

const listFiles = async (directory, predicate) => {
  const entries = await readdir(directory, {withFileTypes: true});
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(entryPath, predicate)));
    } else if (entry.isFile() && predicate(entry.name)) {
      files.push(entryPath);
    }
  }

  return files;
};

const loadStoryboardScenes = async (animationId) => {
  const storyboardPath = path.join(getAnimationDirectory(animationId), 'remotion', 'storyboard.ts');
  const storyboard = await import(`${pathToFileURL(storyboardPath).href}?webp=${Date.now()}`);
  const scenes = Object.entries(storyboard.SCENES ?? {});

  if (scenes.length === 0) throw new Error(`${animationId}: storyboard.ts must export a non-empty SCENES object.`);

  return scenes.map(([key, scene]) => {
    if (!Number.isFinite(scene?.start) || !Number.isFinite(scene?.duration) || scene.duration < 2) {
      throw new Error(`${animationId}: scene "${key}" has an invalid start or duration.`);
    }
    if (!Number.isInteger(scene.previewEndTrimFrames) || scene.previewEndTrimFrames < 0 || scene.previewEndTrimFrames >= scene.duration - 1) {
      throw new Error(`${animationId}: scene "${key}" must declare previewEndTrimFrames from 0 to duration - 2.`);
    }
    return {duration: scene.duration, key, previewEndTrimFrames: scene.previewEndTrimFrames, start: scene.start};
  });
};

const extractPlayerSceneMetadata = (source, componentPath) => {
  const descriptors = [];
  const sceneObjectPattern = /\{([^{}]*?)\.\.\.SCENES\.([A-Za-z0-9_]+)([^{}]*?)\}/g;

  for (const match of source.matchAll(sceneObjectPattern)) {
    const objectSource = `${match[1]}${match[3]}`;
    const id = objectSource.match(/\bid:\s*['"]([^'"]+)['"]/u)?.[1];
    const number = objectSource.match(/\bnumber:\s*['"]([^'"]+)['"]/u)?.[1];
    const title = objectSource.match(/\btitle:\s*['"]([^'"]+)['"]/u)?.[1];
    const storyboardKey = match[2];

    if (!id || !number || !title || !SCENE_ID_PATTERN.test(id)) {
      throw new Error(`${componentPath}: every scene must declare kebab-case id, number, and title before its SCENES spread.`);
    }
    descriptors.push({id, number, storyboardKey, title});
  }

  return descriptors;
};

const loadPlayerSceneMetadata = async (animationId, storyboardScenes) => {
  const relativeDirectory = path.relative(ANIMATIONS_ROOT, getAnimationDirectory(animationId)).replaceAll(path.sep, '/');
  const storyboardImport = `@/animations/${relativeDirectory}/remotion/storyboard`;
  const componentPaths = await listFiles(COMPONENTS_ROOT, (fileName) => fileName.endsWith('Player.tsx'));
  const matches = [];

  for (const componentPath of componentPaths) {
    const source = await readFile(componentPath, 'utf8');
    if (source.includes(storyboardImport)) matches.push({componentPath, source});
  }

  if (matches.length !== 1) {
    throw new Error(`${animationId}: expected one player component importing ${storyboardImport}, found ${matches.length}.`);
  }

  const descriptors = extractPlayerSceneMetadata(matches[0].source, matches[0].componentPath);
  const descriptorByKey = new Map(descriptors.map((descriptor) => [descriptor.storyboardKey, descriptor]));
  if (descriptorByKey.size !== storyboardScenes.length || storyboardScenes.some((scene) => !descriptorByKey.has(scene.key))) {
    throw new Error(`${animationId}: player metadata must map every storyboard scene exactly once.`);
  }

  return storyboardScenes.map((scene) => ({...scene, ...descriptorByKey.get(scene.key)}));
};

const selectDeckComposition = (animationId, compositions) => {
  const deckId = animationId
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  return compositions.find((item) => item.id === deckId)
    ?? compositions.find((item) => !item.id.includes('-'))
    ?? [...compositions].sort((a, b) => b.durationInFrames - a.durationInFrames)[0];
};

const runCommand = (command, args) => new Promise((resolve, reject) => {
  const child = spawn(command, args, {stdio: 'inherit', windowsHide: true});
  child.once('error', reject);
  child.once('exit', (code, signal) => {
    if (code === 0) {
      resolve();
      return;
    }
    reject(new Error(`${command} exited with ${signal ? `signal ${signal}` : `code ${code}`}.`));
  });
});

const renameWithRetry = async (source, target) => {
  const retryableCodes = new Set(['EACCES', 'EBUSY', 'EPERM']);

  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      await rename(source, target);
      return;
    } catch (error) {
      if (!retryableCodes.has(error?.code) || attempt === 39) throw error;
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
};

const withBrowser = async (browserExecutable, callback) => {
  const browser = await openBrowser('chrome', {
    browserExecutable,
    chromiumOptions: {headless: true},
    logLevel: 'error',
  });

  try {
    return await callback(browser);
  } finally {
    await browser.close({silent: true});
  }
};

const replaceDirectory = async (stagingDirectory, targetDirectory) => {
  const backupDirectory = `${targetDirectory}.backup-${process.pid}`;
  const hadTarget = await pathExists(targetDirectory);
  if (hadTarget) await renameWithRetry(targetDirectory, backupDirectory);

  try {
    await renameWithRetry(stagingDirectory, targetDirectory);
    if (hadTarget) await rm(backupDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
  } catch (error) {
    if (hadTarget && !(await pathExists(targetDirectory))) await renameWithRetry(backupDirectory, targetDirectory);
    throw error;
  }
};

const renderAnimation = async ({animationId, browserExecutable}) => {
  const storyboardScenes = await loadStoryboardScenes(animationId);
  const scenes = await loadPlayerSceneMetadata(animationId, storyboardScenes);
  const animationDirectory = getAnimationDirectory(animationId);
  const bundleDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-webp-bundle-${animationId}-`));
  const workDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-webp-frames-${animationId}-`));
  const targetDirectory = path.join(PUBLIC_ROOT, animationId);
  const stagingDirectory = `${targetDirectory}.staging-${process.pid}`;

  await rm(stagingDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
  await mkdir(stagingDirectory, {recursive: true});
  console.log(`\n[${animationId}] Bundling composition...`);

  try {
    const serveUrl = await bundle({
      entryPoint: path.join(animationDirectory, 'remotion', 'index.ts'),
      outDir: bundleDirectory,
      publicDir: path.join(PROJECT_ROOT, 'public'),
      rootDir: PROJECT_ROOT,
      enableCaching: true,
      onProgress: () => undefined,
    });
    const compositions = await withBrowser(browserExecutable, (browser) => (
      getCompositions(serveUrl, {puppeteerInstance: browser})
    ));
    const composition = selectDeckComposition(animationId, compositions);
    if (!composition) throw new Error(`${animationId}: no composition found.`);

    const everyNthFrame = Math.max(1, Math.round(composition.fps / WEBP_TARGET_FPS));
    const outputFps = composition.fps / everyNthFrame;
    const scale = WEBP_WIDTH / composition.width;
    if (scale <= 0 || scale > 1) throw new Error(`${animationId}: composition width must be at least ${WEBP_WIDTH}.`);
    const outputHeight = Math.round(composition.height * scale);
    const publishedScenes = [];

    for (let index = 0; index < scenes.length; index += 1) {
      const scene = scenes[index];
      const stableEndFrame = Math.min(
        composition.durationInFrames - 1,
        scene.start + scene.duration - 1 - scene.previewEndTrimFrames,
      );
      const frameDirectory = path.join(workDirectory, `${String(index + 1).padStart(2, '0')}-${scene.id}`);
      await mkdir(frameDirectory, {recursive: true});
      console.log(`[${animationId}] ${scene.number}/${String(scenes.length).padStart(2, '0')} ${scene.id}: rendering frames ${scene.start}-${stableEndFrame}`);

      const rendered = await withBrowser(browserExecutable, (browser) => renderFrames({
        composition,
        serveUrl,
        outputDir: frameDirectory,
        inputProps: {},
        frameRange: [scene.start, stableEndFrame],
        everyNthFrame,
        imageFormat: 'png',
        imageSequencePattern: 'frame-[frame].[ext]',
        scale,
        concurrency: 1,
        muted: true,
        puppeteerInstance: browser,
        logLevel: 'error',
      }));

      const targetFile = `${scene.id}.webp`;
      const targetPath = path.join(stagingDirectory, targetFile);
      await runCommand('ffmpeg', [
        '-hide_banner',
        '-loglevel', 'error',
        '-y',
        '-framerate', String(outputFps),
        '-i', rendered.assetsInfo.imageSequenceName,
        '-an',
        '-c:v', 'libwebp_anim',
        '-preset', 'text',
        '-quality', String(WEBP_QUALITY),
        '-loop', String(WEBP_LOOP_COUNT),
        '-threads', '1',
        targetPath,
      ]);

      const metadata = await sharp(targetPath, {animated: true, limitInputPixels: false}).metadata();
      const pageHeight = metadata.pageHeight ?? metadata.height;
      const frameDelays = metadata.delay ?? [];
      const expectedDurationMs = Math.round((rendered.frameCount / outputFps) * 1000);
      const encodedDurationMs = frameDelays.reduce((sum, delay) => sum + delay, 0);
      if (
        metadata.format !== 'webp'
        || metadata.width !== WEBP_WIDTH
        || pageHeight !== outputHeight
        || metadata.pages !== rendered.frameCount
        || metadata.loop !== WEBP_LOOP_COUNT
        || frameDelays.length !== rendered.frameCount
        || Math.abs(encodedDurationMs - expectedDurationMs) > 1
      ) {
        throw new Error(`${animationId}: ${targetFile} failed animated WebP validation.`);
      }

      const fileSize = (await stat(targetPath)).size;
      publishedScenes.push({
        durationMs: encodedDurationMs,
        endFrame: stableEndFrame,
        file: targetFile,
        fileSize,
        frameCount: rendered.frameCount,
        id: scene.id,
        number: scene.number,
        startFrame: scene.start,
        title: scene.title,
      });
      console.log(`[${animationId}] ${scene.id}: ${(fileSize / 1024 / 1024).toFixed(2)} MiB`);
      await rm(frameDirectory, {force: true, recursive: true});
    }

    const manifest = {
      animationId,
      compositionId: composition.id,
      format: 'animated-webp',
      generatedAt: new Date().toISOString(),
      loopCount: WEBP_LOOP_COUNT,
      quality: WEBP_QUALITY,
      scenes: publishedScenes,
      size: {height: outputHeight, width: WEBP_WIDTH},
      sourceFps: composition.fps,
      targetFps: outputFps,
      totalFileSize: publishedScenes.reduce((sum, scene) => sum + scene.fileSize, 0),
    };
    await writeFile(path.join(stagingDirectory, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
    await replaceDirectory(stagingDirectory, targetDirectory);
    console.log(`[${animationId}] Published: ${targetDirectory}`);
    return manifest;
  } catch (error) {
    try {
      await rm(stagingDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
    } catch (cleanupError) {
      console.warn(`[${animationId}] Could not remove staging directory: ${cleanupError.message}`);
    }
    throw error;
  } finally {
    await rm(bundleDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
    await rm(workDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
  }
};

const main = async () => {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    console.log(usage.trim());
    return;
  }

  await runCommand('ffmpeg', ['-hide_banner', '-version']);
  const discoveredIds = await discoverAnimationIds();
  const animationIds = options.animationIds.length === 0 ? discoveredIds : [...new Set(options.animationIds)];
  const invalidIds = animationIds.filter((animationId) => !ANIMATION_ID_PATTERN.test(animationId));
  if (invalidIds.length > 0) throw new Error(`Invalid animation ID: ${invalidIds.join(', ')}`);
  const missingIds = animationIds.filter((animationId) => !discoveredIds.includes(animationId));
  if (missingIds.length > 0) throw new Error(`Animation not found or incomplete: ${missingIds.join(', ')}`);

  await mkdir(PUBLIC_ROOT, {recursive: true});
  const browserExecutable = await findBrowserExecutable();
  if (browserExecutable) console.log(`Using browser: ${browserExecutable}`);
  const manifests = [];
  for (const animationId of animationIds) {
    manifests.push(await renderAnimation({animationId, browserExecutable}));
  }
  const totalSize = manifests.reduce((sum, manifest) => sum + manifest.totalFileSize, 0);
  console.log(`\nPublished ${manifests.length} animations, ${manifests.reduce((sum, manifest) => sum + manifest.scenes.length, 0)} scenes, ${(totalSize / 1024 / 1024).toFixed(2)} MiB.`);
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
