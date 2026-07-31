import {spawn} from 'node:child_process';
import {mkdtemp, mkdir, readFile, readdir, rename, rm, stat, writeFile} from 'node:fs/promises';
import {homedir, tmpdir} from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {bundle} from '@remotion/bundler';
import {getCompositions, openBrowser, renderFrames} from '@remotion/renderer';
const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');
const COMPONENTS_ROOT = path.join(PROJECT_ROOT, 'src', 'components');
const PUBLIC_AVIF_ROOT = path.join(PROJECT_ROOT, 'public', 'animation-avif');
const PUBLIC_VIDEO_ROOT = path.join(PROJECT_ROOT, 'public', 'animation-video');
const COMPARISON_ROOT = path.join(PROJECT_ROOT, '.artifacts', 'avif-quality-comparisons');
const ANIMATION_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const SCENE_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const DEFAULT_AVIF_QUALITY = 45;
const AVIF_QUALITY_MIN = 0;
const AVIF_QUALITY_MAX = 100;
const AVIF_WIDTH = 1280;
const VIDEO_WIDTH = 2560;
const VIDEO_CRF = 35;
const TARGET_FPS = 15;
const AVIF_LOOP_COUNT = 1;
const animationDirectories = new Map();

const usage = `
Render every stable scene range as a standalone AV1 MP4, or compare AV1 encodings.

Usage:
  pnpm animation:publish-video [animation-id ...]
  pnpm animation:publish-video legal-jurisdiction --scene mediation-confirmation
  pnpm animation:publish-avif legal-jurisdiction --scene mediation-confirmation --widths 2560
  pnpm animation:compare-av1 legal-jurisdiction --scene mediation-confirmation --widths 1920,2560 --crfs 35,25,16

Output:
  public/animation-video/<animation-id>/<scene-id>.mp4
  .artifacts/avif-quality-comparisons/<animation-id>/<run-id>/<scene-id>.<width>x<height>.crf<value>.<avif|mp4>

Encoding contract:
  Published video: AV1 CRF ${VIDEO_CRF}, ${VIDEO_WIDTH}px wide, ${TARGET_FPS}fps target, MP4 faststart, no audio
  Comparison AVIF: quality 0-100 maps to AV1 CRF 63-0; default q${DEFAULT_AVIF_QUALITY}, ${AVIF_WIDTH}px wide, loop count ${AVIF_LOOP_COUNT}
`;

const parseArguments = (rawArguments) => {
  const animationIds = [];
  let quality = DEFAULT_AVIF_QUALITY;
  let qualities;
  let crfs;
  let sceneId;
  let widths;
  let publishVideo = false;
  let qualityExplicit = false;

  const readValue = (index, option) => {
    const value = rawArguments[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`${option} requires a value.`);
    return value;
  };
  const parseQuality = (value, option) => {
    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed < AVIF_QUALITY_MIN || parsed > AVIF_QUALITY_MAX) {
      throw new Error(`${option} must be an integer from ${AVIF_QUALITY_MIN} to ${AVIF_QUALITY_MAX}.`);
    }
    return parsed;
  };
  const parseCrf = (value, option) => {
    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed < 0 || parsed > 63) {
      throw new Error(`${option} must be an integer from 0 to 63.`);
    }
    return parsed;
  };
  const parseWidth = (value, option) => {
    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed < 320 || parsed > 7680) {
      throw new Error(`${option} must contain integer widths from 320 to 7680.`);
    }
    return parsed;
  };

  for (let index = 0; index < rawArguments.length; index += 1) {
    const argument = rawArguments[index];
    if (argument === '--') continue;
    if (argument === '--help') return {help: true};
    if (argument === '--quality') {
      quality = parseQuality(readValue(index, argument), argument);
      qualityExplicit = true;
      index += 1;
      continue;
    }
    if (argument.startsWith('--quality=')) {
      quality = parseQuality(argument.slice('--quality='.length), '--quality');
      qualityExplicit = true;
      continue;
    }
    if (argument === '--qualities') {
      qualities = readValue(index, argument).split(',').map((value) => parseQuality(value.trim(), argument));
      index += 1;
      continue;
    }
    if (argument.startsWith('--qualities=')) {
      qualities = argument.slice('--qualities='.length).split(',').map((value) => parseQuality(value.trim(), '--qualities'));
      continue;
    }
    if (argument === '--crfs') {
      crfs = readValue(index, argument).split(',').map((value) => parseCrf(value.trim(), argument));
      index += 1;
      continue;
    }
    if (argument.startsWith('--crfs=')) {
      crfs = argument.slice('--crfs='.length).split(',').map((value) => parseCrf(value.trim(), '--crfs'));
      continue;
    }
    if (argument === '--widths') {
      widths = readValue(index, argument).split(',').map((value) => parseWidth(value.trim(), argument));
      index += 1;
      continue;
    }
    if (argument.startsWith('--widths=')) {
      widths = argument.slice('--widths='.length).split(',').map((value) => parseWidth(value.trim(), '--widths'));
      continue;
    }
    if (argument === '--scene') {
      sceneId = readValue(index, argument);
      index += 1;
      continue;
    }
    if (argument.startsWith('--scene=')) {
      sceneId = argument.slice('--scene='.length);
      continue;
    }
    if (argument === '--video') {
      publishVideo = true;
      continue;
    }
    if (argument.startsWith('--')) throw new Error(`Unknown option: ${argument}`);
    animationIds.push(argument);
  }

  if (sceneId && !SCENE_ID_PATTERN.test(sceneId)) throw new Error(`Invalid scene ID: ${sceneId}`);
  if (publishVideo && (qualities || qualityExplicit)) throw new Error('--quality and --qualities are only available for AVIF comparisons.');
  const resolvedCrfs = crfs ? [...new Set(crfs)] : publishVideo ? [VIDEO_CRF] : undefined;
  const resolvedQualities = resolvedCrfs ? undefined : [...new Set(qualities ?? [quality])];
  if (resolvedCrfs && qualities) throw new Error('Use either --qualities or --crfs, not both.');
  const comparisonCount = resolvedCrfs?.length ?? resolvedQualities?.length ?? 0;
  if (comparisonCount > 1 && (!sceneId || animationIds.length !== 1)) {
    throw new Error('--qualities and --crfs require exactly one animation ID and one --scene ID.');
  }
  if (sceneId && animationIds.length !== 1) {
    throw new Error('--scene requires exactly one animation ID.');
  }
  const resolvedWidths = [...new Set(widths ?? [publishVideo ? VIDEO_WIDTH : AVIF_WIDTH])];
  if (publishVideo && resolvedWidths.length !== 1) {
    throw new Error('Published scene video requires exactly one output width.');
  }
  if (resolvedWidths.length > 1 && (!sceneId || animationIds.length !== 1)) {
    throw new Error('--widths requires exactly one animation ID and one --scene ID when comparing multiple resolutions.');
  }
  return {
    animationIds,
    crfs: resolvedCrfs,
    help: false,
    qualities: resolvedCrfs ? undefined : resolvedQualities,
    publishVideo,
    sceneId,
    widths: resolvedWidths,
  };
};

const qualityToCrf = (quality) => Math.round((AVIF_QUALITY_MAX - quality) * 63 / AVIF_QUALITY_MAX);

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
  const storyboard = await import(`${pathToFileURL(storyboardPath).href}?avif=${Date.now()}`);
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

const runCommandCapture = (command, args) => new Promise((resolve, reject) => {
  const child = spawn(command, args, {stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true});
  let stdout = '';
  let stderr = '';
  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');
  child.stdout.on('data', (chunk) => { stdout += chunk; });
  child.stderr.on('data', (chunk) => { stderr += chunk; });
  child.once('error', reject);
  child.once('exit', (code, signal) => {
    if (code === 0) {
      resolve(stdout);
      return;
    }
    reject(new Error(`${command} exited with ${signal ? `signal ${signal}` : `code ${code}`}: ${stderr.trim()}`));
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

const renderAnimation = async ({animationId, browserExecutable, crfs, publishVideo, qualities, sceneId, widths}) => {
  const storyboardScenes = await loadStoryboardScenes(animationId);
  const allScenes = await loadPlayerSceneMetadata(animationId, storyboardScenes);
  const scenes = sceneId ? allScenes.filter((scene) => scene.id === sceneId) : allScenes;
  if (scenes.length === 0) throw new Error(`${animationId}: scene "${sceneId}" was not found.`);
  const encodingVariants = crfs
    ? crfs.map((crf) => ({crf, quality: undefined}))
    : qualities.map((quality) => ({crf: qualityToCrf(quality), quality}));
  const comparison = !publishVideo && (encodingVariants.length > 1 || widths.length > 1);
  const outputFormats = publishVideo ? ['mp4'] : crfs ? ['avif', 'mp4'] : ['avif'];
  const animationDirectory = getAnimationDirectory(animationId);
  const bundleDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-avif-bundle-${animationId}-`));
  const workDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-avif-frames-${animationId}-`));
  const comparisonRunId = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-');
  const targetDirectory = comparison
    ? path.join(COMPARISON_ROOT, animationId, comparisonRunId)
    : path.join(publishVideo ? PUBLIC_VIDEO_ROOT : PUBLIC_AVIF_ROOT, animationId);
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

    const everyNthFrame = Math.max(1, Math.round(composition.fps / TARGET_FPS));
    const outputFps = composition.fps / everyNthFrame;
    const publishedScenes = [];

    for (let index = 0; index < scenes.length; index += 1) {
      const scene = scenes[index];
      const stableEndFrame = Math.min(
        composition.durationInFrames - 1,
        scene.start + scene.duration - 1 - scene.previewEndTrimFrames,
      );
      const resolutions = [];
      let sceneFrameCount = 0;

      for (const outputWidth of widths) {
        const scale = outputWidth / composition.width;
        const outputHeight = Math.round(composition.height * scale);
        const resolutionLabel = `${outputWidth}x${outputHeight}`;
        const frameDirectory = path.join(workDirectory, `${String(index + 1).padStart(2, '0')}-${scene.id}-${resolutionLabel}`);
        await mkdir(frameDirectory, {recursive: true});
        console.log(`[${animationId}] ${scene.number}/${String(scenes.length).padStart(2, '0')} ${scene.id}: rendering ${resolutionLabel}, frames ${scene.start}-${stableEndFrame}`);

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

        const expectedDurationMs = Math.round((rendered.frameCount / outputFps) * 1000);
        sceneFrameCount = rendered.frameCount;
        const variants = [];

        for (const encodingVariant of encodingVariants) {
          const outputs = [];
          for (const outputFormat of outputFormats) {
            const variantLabel = encodingVariant.quality === undefined
              ? `crf${encodingVariant.crf}`
              : `q${encodingVariant.quality}`;
            const targetFile = comparison
              ? `${scene.id}.${resolutionLabel}.${variantLabel}.${outputFormat}`
              : `${scene.id}.${outputFormat}`;
            const targetPath = path.join(stagingDirectory, targetFile);
            const outputArguments = outputFormat === 'avif'
              ? ['-still-picture', '0', '-loop', String(AVIF_LOOP_COUNT), '-f', 'avif']
              : ['-tag:v', 'av01', '-movflags', '+faststart', '-f', 'mp4'];
            await runCommand('ffmpeg', [
              '-hide_banner',
              '-loglevel', 'error',
              '-y',
              '-framerate', String(outputFps),
              '-i', rendered.assetsInfo.imageSequenceName,
              '-an',
              '-c:v', 'libaom-av1',
              '-crf', String(encodingVariant.crf),
              '-b:v', '0',
              '-cpu-used', '6',
              '-threads', '1',
              ...outputArguments,
              targetPath,
            ]);

            const probe = JSON.parse(await runCommandCapture('ffprobe', [
              '-hide_banner',
              '-v', 'error',
              '-count_frames',
              '-show_streams',
              '-show_format',
              '-of', 'json',
              targetPath,
            ]));
            const animationStream = [...(probe.streams ?? [])].reverse().find((stream) => stream.codec_type === 'video');
            const encodedFrameCount = Number(animationStream?.nb_read_frames ?? animationStream?.nb_frames);
            const encodedDurationMs = Math.round(Number(animationStream?.duration ?? probe.format?.duration) * 1000);
            const validFormat = outputFormat === 'avif'
              ? probe.format?.tags?.major_brand === 'avis'
              : probe.format?.format_name?.includes('mp4');
            if (
              !validFormat
              || animationStream?.codec_name !== 'av1'
              || animationStream?.width !== outputWidth
              || animationStream?.height !== outputHeight
              || encodedFrameCount !== rendered.frameCount
              || !Number.isFinite(encodedDurationMs)
              || Math.abs(encodedDurationMs - expectedDurationMs) > 1
            ) {
              throw new Error(`${animationId}: ${targetFile} failed ${outputFormat.toUpperCase()} validation.`);
            }

            const fileSize = (await stat(targetPath)).size;
            outputs.push({durationMs: encodedDurationMs, file: targetFile, fileSize, format: outputFormat});
            console.log(`[${animationId}] ${scene.id} ${resolutionLabel} CRF ${encodingVariant.crf} ${outputFormat.toUpperCase()}: ${(fileSize / 1024 / 1024).toFixed(2)} MiB`);
          }
          variants.push({...encodingVariant, outputs});
        }

        resolutions.push({height: outputHeight, variants, width: outputWidth});
        await rm(frameDirectory, {force: true, recursive: true});
      }

      const sceneMetadata = {
        endFrame: stableEndFrame,
        frameCount: sceneFrameCount,
        id: scene.id,
        number: scene.number,
        startFrame: scene.start,
        title: scene.title,
      };
      const primaryResolution = resolutions[0];
      const primaryVariant = primaryResolution.variants[0];
      const primaryOutput = primaryVariant.outputs[0];
      publishedScenes.push(comparison
        ? {...sceneMetadata, resolutions}
        : {
            ...sceneMetadata,
            ...primaryOutput,
            crf: primaryVariant.crf,
            quality: primaryVariant.quality,
          });
    }

    const manifest = {
      animationId,
      comparison: comparison || undefined,
      compositionId: composition.id,
      crf: comparison ? undefined : encodingVariants[0].crf,
      format: publishVideo ? 'av1-mp4' : 'animated-avif',
      generatedAt: new Date().toISOString(),
      loopCount: publishVideo ? undefined : AVIF_LOOP_COUNT,
      quality: comparison ? undefined : encodingVariants[0].quality,
      formats: comparison ? outputFormats : undefined,
      qualities: comparison && !crfs ? qualities : undefined,
      crfs: comparison && crfs ? crfs : undefined,
      scenes: publishedScenes,
      size: comparison ? undefined : {
        height: Math.round(composition.height * widths[0] / composition.width),
        width: widths[0],
      },
      sizes: comparison ? widths.map((width) => ({
        height: Math.round(composition.height * width / composition.width),
        width,
      })) : undefined,
      sourceFps: composition.fps,
      targetFps: outputFps,
      totalFileSize: publishedScenes.reduce((sum, scene) => sum + (comparison
        ? scene.resolutions.reduce((resolutionTotal, resolution) => resolutionTotal
          + resolution.variants.reduce((variantTotal, variant) => variantTotal
            + variant.outputs.reduce((outputTotal, output) => outputTotal + output.fileSize, 0), 0), 0)
        : scene.fileSize), 0),
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

  await mkdir(options.publishVideo ? PUBLIC_VIDEO_ROOT : options.crfs ? COMPARISON_ROOT : PUBLIC_AVIF_ROOT, {recursive: true});
  const browserExecutable = await findBrowserExecutable();
  if (browserExecutable) console.log(`Using browser: ${browserExecutable}`);
  const manifests = [];
  for (const animationId of animationIds) {
    manifests.push(await renderAnimation({
      animationId,
      browserExecutable,
      crfs: options.crfs,
      publishVideo: options.publishVideo,
      qualities: options.qualities,
      sceneId: options.sceneId,
      widths: options.widths,
    }));
  }
  const totalSize = manifests.reduce((sum, manifest) => sum + manifest.totalFileSize, 0);
  console.log(`\nPublished ${manifests.length} animations, ${manifests.reduce((sum, manifest) => sum + manifest.scenes.length, 0)} scenes, ${(totalSize / 1024 / 1024).toFixed(2)} MiB.`);
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
