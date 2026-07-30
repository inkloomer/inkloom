import {mkdtemp, mkdir, readFile, readdir, rename, rm, stat, writeFile} from 'node:fs/promises';
import {homedir, tmpdir} from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {bundle} from '@remotion/bundler';
import {getCompositions, openBrowser, renderStill} from '@remotion/renderer';
import sharp from 'sharp';

const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');
const COMPONENTS_ROOT = path.join(PROJECT_ROOT, 'src', 'components');
const DOCS_ROOT = path.join(PROJECT_ROOT, 'src', 'content', 'docs');
const DEFAULT_OUTPUT_ROOT = path.join(PROJECT_ROOT, '.artifacts', 'animation-pages');
const DEFAULT_CAPTURE_RATIO = 0.82;
const DEFAULT_MOTION_RATIOS = [0.68, 0.76, 0.84];
const FINAL_FRAME_WEBP_QUALITY = 60;
const ANIMATION_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const SCENE_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const FINAL_FRAME_BLOCK_START = '<!-- inkloom-animation-final-frames:start -->';
const FINAL_FRAME_BLOCK_END = '<!-- inkloom-animation-final-frames:end -->';
const animationDirectories = new Map();

const usage = `
Capture a complete still for every Remotion page.

Usage:
  pnpm animation:pages                         Capture every discovered animation
  pnpm animation:pages legal-jurisdiction      Capture one animation
  pnpm animation:pages proper-party party-change
  pnpm animation:pages --at 0.75               Change the scene capture position
  pnpm animation:pages legal-jurisdiction --motion
  pnpm animation:pages --output D:\\captures   Choose an output root
  pnpm animation:publish-stills legal-jurisdiction

Options:
  --all              Capture every discovered animation (the default)
  --at <0..1>        Position within each scene (default: ${DEFAULT_CAPTURE_RATIO})
  --motion           Capture ${DEFAULT_MOTION_RATIOS.join(', ')} checkpoints per scene for sustained-motion QA
  --publish           Promote stable final frames to versioned WebP q60 assets and update the MDX carrier
  --version <value>   Use an explicit timestamp version when publishing
  --dry-run           Render and validate publish assets without changing the carrier or its asset directory
  --output <path>    Output root (default: .artifacts/animation-pages)
  --help             Show this help
`;

const parseArguments = (rawArguments) => {
  const animationIds = [];
  let captureRatio = DEFAULT_CAPTURE_RATIO;
  let captureRatioProvided = false;
  let outputRoot = DEFAULT_OUTPUT_ROOT;
  let motionCheck = false;
  let publishStills = false;
  let publishVersion = null;
  let dryRun = false;
  let captureAll = rawArguments.length === 0;

  for (let index = 0; index < rawArguments.length; index += 1) {
    const argument = rawArguments[index];

    if (argument === '--') continue;
    if (argument === '--help') return {help: true};
    if (argument === '--all') {
      captureAll = true;
      continue;
    }
    if (argument === '--at') {
      captureRatio = Number(rawArguments[index + 1]);
      captureRatioProvided = true;
      index += 1;
      continue;
    }
    if (argument === '--motion') {
      motionCheck = true;
      continue;
    }
    if (argument === '--publish') {
      publishStills = true;
      continue;
    }
    if (argument === '--version') {
      const versionArgument = rawArguments[index + 1];
      if (!versionArgument) throw new Error('--version requires a value.');
      publishVersion = versionArgument;
      index += 1;
      continue;
    }
    if (argument === '--dry-run') {
      dryRun = true;
      continue;
    }
    if (argument === '--output') {
      const outputArgument = rawArguments[index + 1];
      if (!outputArgument) throw new Error('--output requires a path.');
      outputRoot = path.resolve(PROJECT_ROOT, outputArgument);
      index += 1;
      continue;
    }
    if (argument.startsWith('--')) throw new Error(`Unknown option: ${argument}`);

    animationIds.push(argument);
  }

  if (!Number.isFinite(captureRatio) || captureRatio < 0 || captureRatio > 1) {
    throw new Error('--at must be a number from 0 to 1.');
  }
  if (motionCheck && captureRatioProvided) {
    throw new Error('--motion and --at cannot be used together.');
  }
  if (publishStills && motionCheck) throw new Error('--publish and --motion cannot be used together.');
  if (publishStills && captureRatioProvided) throw new Error('--publish chooses each scene final frame; do not pass --at.');
  if ((publishVersion || dryRun) && !publishStills) {
    throw new Error('--version and --dry-run require --publish.');
  }
  if (!captureAll && animationIds.length === 0) captureAll = true;

  return {animationIds, captureAll, captureRatio, dryRun, help: false, motionCheck, outputRoot, publishStills, publishVersion};
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

const validateAnimationIds = (animationIds) => {
  for (const animationId of animationIds) {
    if (!ANIMATION_ID_PATTERN.test(animationId)) {
      throw new Error(`Invalid animation ID: ${animationId}`);
    }
  }
};

const loadScenes = async (animationId) => {
  const storyboardPath = path.join(getAnimationDirectory(animationId), 'remotion', 'storyboard.ts');
  const storyboardUrl = `${pathToFileURL(storyboardPath).href}?capture=${Date.now()}`;
  const storyboard = await import(storyboardUrl);
  const scenes = Object.entries(storyboard.SCENES ?? {});

  if (scenes.length === 0) {
    throw new Error(`${animationId}: storyboard.ts must export a non-empty SCENES object.`);
  }

  return scenes.map(([key, scene]) => {
    if (!Number.isFinite(scene?.start) || !Number.isFinite(scene?.duration) || scene.duration < 1) {
      throw new Error(`${animationId}: scene "${key}" has an invalid start or duration.`);
    }

    if (!Number.isInteger(scene.previewEndTrimFrames) || scene.previewEndTrimFrames < 0 || scene.previewEndTrimFrames >= scene.duration) {
      throw new Error(`${animationId}: scene "${key}" must declare previewEndTrimFrames from 0 to duration - 1.`);
    }

    return {duration: scene.duration, key, previewEndTrimFrames: scene.previewEndTrimFrames, start: scene.start};
  });
};

const makeRunDirectory = async (outputRoot, animationId) => {
  const timestamp = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-');
  const runDirectory = path.join(outputRoot, animationId, timestamp);
  await mkdir(runDirectory, {recursive: true});
  return runDirectory;
};

const createContactSheet = async ({imagePaths, outputPath, width, height}) => {
  const columns = Math.min(3, imagePaths.length);
  const rows = Math.ceil(imagePaths.length / columns);
  const gap = 16;
  const tileWidth = 480;
  const tileHeight = Math.round((tileWidth * height) / width);
  const sheetWidth = columns * tileWidth + (columns + 1) * gap;
  const sheetHeight = rows * tileHeight + (rows + 1) * gap;
  const composites = [];

  for (let index = 0; index < imagePaths.length; index += 1) {
    const input = await sharp(imagePaths[index])
      .resize({width: tileWidth, height: tileHeight, fit: 'contain', background: '#F3F5F2'})
      .png()
      .toBuffer();

    composites.push({
      input,
      left: gap + (index % columns) * (tileWidth + gap),
      top: gap + Math.floor(index / columns) * (tileHeight + gap),
    });
  }

  await sharp({
    create: {
      width: sheetWidth,
      height: sheetHeight,
      channels: 4,
      background: '#101513',
    },
  })
    .composite(composites)
    .png()
    .toFile(outputPath);
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

const loadAnimationMetadata = async (animationId) => {
  const metadataPath = path.join(getAnimationDirectory(animationId), 'animation.meta.ts');
  if (!(await fileExists(metadataPath))) throw new Error(`${animationId}: animation.meta.ts is required to publish final frames.`);

  const metadataModule = await import(`${pathToFileURL(metadataPath).href}?publish=${Date.now()}`);
  const metadata = metadataModule.default;
  if (!metadata || metadata.id !== animationId || typeof metadata.route !== 'string' || metadata.route.length === 0) {
    throw new Error(`${animationId}: animation.meta.ts must export matching id and route values.`);
  }
  if (typeof metadata.title !== 'string' || metadata.title.length === 0) {
    throw new Error(`${animationId}: animation.meta.ts must export a title.`);
  }

  return metadata;
};

const resolveCarrierPath = async (route) => {
  const normalizedRoute = route.replaceAll('\\', '/').replace(/^\/+|\/+$/g, '');
  if (!normalizedRoute || normalizedRoute.split('/').some((part) => part === '.' || part === '..')) {
    throw new Error(`Invalid animation carrier route: ${route}`);
  }

  for (const extension of ['.mdx', '.md']) {
    const candidate = path.join(DOCS_ROOT, `${normalizedRoute}${extension}`);
    if (await fileExists(candidate)) return candidate;
  }

  throw new Error(`No MDX or Markdown carrier found for route: ${route}`);
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
      throw new Error(`${componentPath}: every player scene must declare kebab-case id, number, and title before its SCENES spread.`);
    }
    descriptors.push({id, number, storyboardKey, title});
  }

  return descriptors;
};

const loadPlayerSceneMetadata = async (animationId, scenes) => {
  const animationRelativeDirectory = path.relative(ANIMATIONS_ROOT, getAnimationDirectory(animationId)).replaceAll(path.sep, '/');
  const storyboardImport = `@/animations/${animationRelativeDirectory}/remotion/storyboard`;
  const componentPaths = await listFiles(COMPONENTS_ROOT, (fileName) => fileName.endsWith('Player.tsx'));
  const matchingComponents = [];

  for (const componentPath of componentPaths) {
    const source = await readFile(componentPath, 'utf8');
    if (source.includes(storyboardImport)) matchingComponents.push({componentPath, source});
  }

  if (matchingComponents.length !== 1) {
    throw new Error(`${animationId}: expected one player component importing ${storyboardImport}, found ${matchingComponents.length}.`);
  }

  const descriptors = extractPlayerSceneMetadata(matchingComponents[0].source, matchingComponents[0].componentPath);
  const descriptorByStoryboardKey = new Map(descriptors.map((descriptor) => [descriptor.storyboardKey, descriptor]));

  if (descriptorByStoryboardKey.size !== scenes.length || scenes.some((scene) => !descriptorByStoryboardKey.has(scene.key))) {
    throw new Error(`${animationId}: player scene metadata must map every storyboard SCENES key exactly once.`);
  }

  return descriptorByStoryboardKey;
};

const timestampVersion = () => new Date().toISOString().replaceAll('-', '').replaceAll(':', '').replace('.', '');

const finalFrameForScene = (scene, composition) => Math.min(
  composition.durationInFrames - 1,
  scene.start + scene.duration - 1 - scene.previewEndTrimFrames,
);

const finalFrameAssetDirectory = (carrierPath, version) => {
  const basename = path.basename(carrierPath, path.extname(carrierPath));
  return path.join(path.dirname(carrierPath), 'animation', basename, version);
};

const markdownImageBlock = ({carrierPath, version, scenes}) => {
  const carrierDirectory = path.dirname(carrierPath);
  const lines = [FINAL_FRAME_BLOCK_START, '## 可停读最终帧'];

  for (const scene of scenes) {
    const assetPath = finalFrameAssetDirectory(carrierPath, version);
    const relativePath = path.relative(carrierDirectory, path.join(assetPath, `${scene.id}.webp`)).replaceAll(path.sep, '/');
    lines.push(`### ${scene.number}｜${scene.title}`, `![${scene.title}](./${relativePath})`);
  }

  lines.push(FINAL_FRAME_BLOCK_END);
  return lines.join('\n\n');
};

const updateCarrierFinalFrames = async ({carrierPath, version, scenes}) => {
  const source = await readFile(carrierPath, 'utf8');
  const block = markdownImageBlock({carrierPath, version, scenes});
  const startIndex = source.indexOf(FINAL_FRAME_BLOCK_START);
  const endIndex = source.indexOf(FINAL_FRAME_BLOCK_END);

  if ((startIndex === -1) !== (endIndex === -1) || (startIndex !== -1 && endIndex < startIndex)) {
    throw new Error(`${carrierPath}: final-frame marker pair is malformed.`);
  }

  const updated = startIndex === -1
    ? `${source.trimEnd()}\n\n${block}\n`
    : `${source.slice(0, startIndex)}${block}${source.slice(endIndex + FINAL_FRAME_BLOCK_END.length)}`;

  await writeFile(carrierPath, updated, 'utf8');
};

const publishFinalStills = async ({animationId, carrierPath, composition, dryRun, pages, runDirectory, version}) => {
  const finalDirectory = finalFrameAssetDirectory(carrierPath, version);
  const stagingDirectory = dryRun
    ? path.join(runDirectory, 'publish-preview')
    : `${finalDirectory}.staging-${process.pid}`;

  if (await pathExists(finalDirectory)) throw new Error(`${animationId}: final-frame version already exists: ${finalDirectory}`);
  if (!dryRun) await mkdir(path.dirname(finalDirectory), {recursive: true});
  await mkdir(stagingDirectory, {recursive: false});

  const publishedScenes = [];
  try {
    for (const page of pages) {
      const targetFile = `${page.scene.id}.webp`;
      const targetPath = path.join(stagingDirectory, targetFile);
      await sharp(path.join(runDirectory, page.file))
        .webp({effort: 4, quality: FINAL_FRAME_WEBP_QUALITY})
        .toFile(targetPath);
      const metadata = await sharp(targetPath).metadata();
      if (metadata.format !== 'webp' || metadata.width !== composition.width || metadata.height !== composition.height) {
        throw new Error(`${animationId}: ${targetFile} was not encoded as full-resolution WebP.`);
      }
      publishedScenes.push({
        file: targetFile,
        frame: page.frame,
        id: page.scene.id,
        number: page.scene.number,
        title: page.scene.title,
      });
    }

    const manifest = {
      animationId,
      compositionId: composition.id,
      format: 'webp',
      generatedAt: new Date().toISOString(),
      quality: FINAL_FRAME_WEBP_QUALITY,
      size: {height: composition.height, width: composition.width},
      version,
      scenes: publishedScenes,
    };
    await writeFile(path.join(stagingDirectory, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

    if (dryRun) {
      console.log(`[${animationId}] Publish dry run: ${stagingDirectory}`);
      return {directory: stagingDirectory, dryRun: true, version};
    }

    await rename(stagingDirectory, finalDirectory);
    await updateCarrierFinalFrames({carrierPath, scenes: publishedScenes, version});
    console.log(`[${animationId}] Published final stills: ${finalDirectory}`);
    return {directory: finalDirectory, dryRun: false, version};
  } catch (error) {
    await rm(stagingDirectory, {force: true, recursive: true});
    throw error;
  }
};

const captureAnimation = async ({
  animationId,
  browser,
  captureRatio,
  dryRun,
  motionCheck,
  outputRoot,
  publishStills,
  publishVersion,
}) => {
  const scenes = await loadScenes(animationId);
  const captureRatios = motionCheck ? DEFAULT_MOTION_RATIOS : [captureRatio];
  const runDirectory = await makeRunDirectory(outputRoot, animationId);
  const bundleDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-${animationId}-`));
  const entryPoint = path.join(getAnimationDirectory(animationId), 'remotion', 'index.ts');

  console.log(`\n[${animationId}] Bundling composition...`);

  try {
    const serveUrl = await bundle({
      entryPoint,
      outDir: bundleDirectory,
      publicDir: path.join(PROJECT_ROOT, 'public'),
      rootDir: PROJECT_ROOT,
      enableCaching: true,
      onProgress: () => undefined,
    });
    const compositions = await getCompositions(serveUrl, {puppeteerInstance: browser});

    if (compositions.length !== 1) {
      throw new Error(`${animationId}: expected exactly one composition, found ${compositions.length}.`);
    }

    const composition = compositions[0];
    const carrierPath = publishStills ? await resolveCarrierPath((await loadAnimationMetadata(animationId)).route) : null;
    const playerSceneMetadata = publishStills ? await loadPlayerSceneMetadata(animationId, scenes) : null;
    const pages = [];

    for (let index = 0; index < scenes.length; index += 1) {
      const scene = scenes[index];
      const pageNumber = String(index + 1).padStart(2, '0');

      for (const ratio of captureRatios) {
        const frame = publishStills
          ? finalFrameForScene(scene, composition)
          : Math.min(
              composition.durationInFrames - 1,
              scene.start + Math.floor((scene.duration - 1) * ratio),
            );
        const ratioSuffix = motionCheck ? `-at-${String(Math.round(ratio * 100)).padStart(2, '0')}` : '';
        const fileName = `page-${pageNumber}-${scene.key}${ratioSuffix}.png`;
        const outputPath = path.join(runDirectory, fileName);

        const captureDescription = publishStills
          ? `final stable frame ${frame}`
          : `@ ${ratio.toFixed(2)} frame ${frame}`;
        console.log(`[${animationId}] ${pageNumber}/${String(scenes.length).padStart(2, '0')} ${scene.key} ${captureDescription}`);
        await renderStill({
          composition,
          serveUrl,
          output: outputPath,
          frame,
          imageFormat: 'png',
          overwrite: true,
          puppeteerInstance: browser,
          logLevel: 'error',
        });

        pages.push({
          ...scene,
          file: fileName,
          frame,
          ...(publishStills ? {scene: playerSceneMetadata.get(scene.key)} : {}),
          ...(motionCheck ? {ratio} : {}),
        });
      }
    }

    const contactSheetPath = path.join(runDirectory, 'contact-sheet.png');
    await createContactSheet({
      imagePaths: pages.map((page) => path.join(runDirectory, page.file)),
      outputPath: contactSheetPath,
      width: composition.width,
      height: composition.height,
    });

    const manifest = {
      animationId,
      ...(motionCheck ? {captureRatios} : publishStills ? {finalFrameStrategy: 'preview-end-trim'} : {captureRatio}),
      compositionId: composition.id,
      capturedAt: new Date().toISOString(),
      mode: motionCheck ? 'motion' : publishStills ? 'publish' : 'page',
      size: {width: composition.width, height: composition.height},
      pages,
    };
    if (publishStills) {
      manifest.published = await publishFinalStills({
        animationId,
        carrierPath,
        composition,
        dryRun,
        pages,
        runDirectory,
        version: publishVersion ?? timestampVersion(),
      });
    }
    await writeFile(path.join(runDirectory, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

    console.log(`[${animationId}] Complete: ${runDirectory}`);
    return runDirectory;
  } finally {
    await rm(bundleDirectory, {recursive: true, force: true});
  }
};

const main = async () => {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    console.log(usage.trim());
    return;
  }

  const discoveredIds = await discoverAnimationIds();
  const animationIds = options.captureAll ? discoveredIds : [...new Set(options.animationIds)];
  validateAnimationIds(animationIds);

  if (animationIds.length === 0) throw new Error('No Remotion animations were discovered.');

  const missingIds = animationIds.filter((animationId) => !discoveredIds.includes(animationId));
  if (missingIds.length > 0) {
    throw new Error(`Animation not found or incomplete: ${missingIds.join(', ')}`);
  }

  await mkdir(options.outputRoot, {recursive: true});
  const browserExecutable = await findBrowserExecutable();
  if (browserExecutable) console.log(`Using browser: ${browserExecutable}`);

  const browser = await openBrowser('chrome', {
    browserExecutable,
    chromiumOptions: {headless: true},
    logLevel: 'error',
  });

  try {
    const outputDirectories = [];
    for (const animationId of animationIds) {
      outputDirectories.push(await captureAnimation({...options, animationId, browser}));
    }

    console.log('\nCaptured animation pages:');
    for (const outputDirectory of outputDirectories) console.log(`- ${outputDirectory}`);
  } finally {
    await browser.close({silent: true});
  }
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
