import {mkdtemp, mkdir, readFile, readdir, rm, stat, writeFile} from 'node:fs/promises';
import {homedir, tmpdir} from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {bundle} from '@remotion/bundler';
import {getCompositions, openBrowser, renderStill} from '@remotion/renderer';
import sharp from 'sharp';
import {auditStableFrames} from './audit-canvas-utilization.mjs';
import {auditSceneOverlaps, buildFrameTargets} from './qa-dom-overlap.mjs';
import {withInkLoomTailwind} from './remotion-webpack.mjs';

const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');
const DEFAULT_OUTPUT_ROOT = path.join(PROJECT_ROOT, '.artifacts', 'animation-pages');
const DEFAULT_CAPTURE_RATIO = 1;
const DEFAULT_MOTION_RATIOS = [0.68, 0.76, 0.84, 1];
const ANIMATION_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const animationDirectories = new Map();

const usage = `
Capture a complete still for every Remotion page.

Usage:
  pnpm animation:pages                         Capture every discovered animation
  pnpm animation:pages legal-jurisdiction      Capture one animation
  pnpm animation:pages proper-party party-change
  pnpm animation:pages --at 0.75               Change the scene capture position
  pnpm animation:pages legal-jurisdiction --motion
  pnpm animation:pages legal-jurisdiction --force
  pnpm animation:pages --output D:\\captures   Choose an output root

Options:
  --all              Capture every discovered animation (the default)
  --at <0..1>        Position within each scene (default: stable final frame)
  --motion           Capture ${DEFAULT_MOTION_RATIOS.slice(0, -1).join(', ')} plus the stable final frame per scene
  --force            Disable Remotion bundler caching for a source-fresh capture
  --output <path>    Output root (default: .artifacts/animation-pages)
  --help             Show this help
`;

const parseArguments = (rawArguments) => {
  const animationIds = [];
  let captureRatio = DEFAULT_CAPTURE_RATIO;
  let captureRatioProvided = false;
  let outputRoot = DEFAULT_OUTPUT_ROOT;
  let motionCheck = false;
  let force = false;
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
    if (argument === '--force') {
      force = true;
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
  if (!captureAll && animationIds.length === 0) captureAll = true;

  return {animationIds, captureAll, captureRatio, force, help: false, motionCheck, outputRoot};
};

const fileExists = async (filePath) => {
  try {
    return (await stat(filePath)).isFile();
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
  const animationDirectory = getAnimationDirectory(animationId);
  const storyboardPath = path.join(animationDirectory, 'remotion', 'storyboard.ts');
  const storyboardUrl = `${pathToFileURL(storyboardPath).href}?capture=${Date.now()}`;
  const storyboard = await import(storyboardUrl);
  const scenes = Object.entries(storyboard.SCENES ?? {});
  const contractPath = path.join(animationDirectory, 'visual-structure.json');
  const contract = await fileExists(contractPath)
    ? JSON.parse(await readFile(contractPath, 'utf8'))
    : {scenes: []};

  if (scenes.length === 0) {
    throw new Error(`${animationId}: storyboard.ts must export a non-empty SCENES object.`);
  }

  return scenes.map(([key, scene], index) => {
    if (!Number.isFinite(scene?.start) || !Number.isFinite(scene?.duration) || scene.duration < 1) {
      throw new Error(`${animationId}: scene "${key}" has an invalid start or duration.`);
    }

    if (!Number.isInteger(scene.previewEndTrimFrames) || scene.previewEndTrimFrames < 0 || scene.previewEndTrimFrames >= scene.duration) {
      throw new Error(`${animationId}: scene "${key}" must declare previewEndTrimFrames from 0 to duration - 1.`);
    }

    return {
      duration: scene.duration,
      finalFrameAudit: Array.isArray(contract.scenes?.[index]?.finalKnowledge),
      key,
      previewEndTrimFrames: scene.previewEndTrimFrames,
      start: scene.start,
    };
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

const captureAnimation = async ({
  animationId,
  browser,
  captureRatio,
  force,
  motionCheck,
  outputRoot,
}) => {
  const scenes = await loadScenes(animationId);
  const captureRatios = motionCheck ? DEFAULT_MOTION_RATIOS : [captureRatio];
  const runDirectory = await makeRunDirectory(outputRoot, animationId);
  const bundleDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-${animationId}-`));
  const entryPoint = path.join(getAnimationDirectory(animationId), 'remotion', 'index.ts');

  console.log(`\n[${animationId}] Bundling composition${force ? ' with cache disabled' : ''}...`);

  try {
    const serveUrl = await bundle({
      entryPoint,
      outDir: bundleDirectory,
      publicDir: path.join(PROJECT_ROOT, 'public'),
      rootDir: PROJECT_ROOT,
      enableCaching: !force,
      webpackOverride: withInkLoomTailwind,
      onProgress: () => undefined,
    });
    const compositions = await getCompositions(serveUrl, {puppeteerInstance: browser});

    if (compositions.length === 0) {
      throw new Error(`${animationId}: no compositions found.`);
    }

    // Prefer the full deck composition when Root also registers per-scene comps for Studio.
    // Convention: deck id is PascalCase of animation-id (dispute-resolution → DisputeResolution).
    const deckId = animationId
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    const composition =
      compositions.find((item) => item.id === deckId) ??
      compositions.find((item) => !item.id.includes('-')) ??
      [...compositions].sort((a, b) => b.durationInFrames - a.durationInFrames)[0];

    if (!composition) {
      throw new Error(`${animationId}: could not resolve main composition among ${compositions.map((c) => c.id).join(', ')}.`);
    }
    const pages = [];

    for (let index = 0; index < scenes.length; index += 1) {
      const scene = scenes[index];
      const pageNumber = String(index + 1).padStart(2, '0');

      for (const ratio of captureRatios) {
        const isFinal = ratio === 1;
        const frame = Math.min(
          composition.durationInFrames - 1,
          isFinal
            ? scene.start + scene.duration - 1 - scene.previewEndTrimFrames
            : scene.start + Math.floor((scene.duration - 1) * ratio),
        );
        const ratioSuffix = motionCheck
          ? isFinal ? '-final' : `-at-${String(Math.round(ratio * 100)).padStart(2, '0')}`
          : '';
        const fileName = `page-${pageNumber}-${scene.key}${ratioSuffix}.png`;
        const outputPath = path.join(runDirectory, fileName);

        console.log(`[${animationId}] ${pageNumber}/${String(scenes.length).padStart(2, '0')} ${scene.key} @ ${isFinal ? 'final' : ratio.toFixed(2)} frame ${frame}`);
        await renderStill({
          composition,
          serveUrl,
          output: outputPath,
          frame,
          inputProps: {
            __inkloomFinalFrameAudit: isFinal && scene.finalFrameAudit,
            __inkloomLayoutAudit: true,
          },
          imageFormat: 'png',
          overwrite: true,
          puppeteerInstance: browser,
          logLevel: 'error',
        });

        pages.push({
          ...scene,
          file: fileName,
          frame,
          capture: isFinal ? 'final' : 'checkpoint',
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
      ...(motionCheck ? {captureRatios} : {captureRatio}),
      compositionId: composition.id,
      capturedAt: new Date().toISOString(),
      mode: motionCheck ? 'motion' : 'page',
      size: {width: composition.width, height: composition.height},
      pages,
    };
    await writeFile(path.join(runDirectory, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

    const contractPath = path.join(getAnimationDirectory(animationId), 'visual-structure.json');
    let controlSafeBottom;
    if (await fileExists(contractPath)) {
      const contract = JSON.parse(await readFile(contractPath, 'utf8'));
      if (Number.isFinite(contract.playerControlSafeBottom)) controlSafeBottom = contract.playerControlSafeBottom;
    }
    const utilization = await auditStableFrames(runDirectory, controlSafeBottom);
    for (const line of utilization.lines) console.log(`[${animationId}] ${line}`);

    const occlusion = await auditSceneOverlaps({
      browser,
      composition,
      frameTargets: buildFrameTargets(scenes, composition.durationInFrames),
      serveUrl: bundleDirectory,
    });
    for (const line of occlusion.lines) console.log(`[${animationId}] ${line}`);

    console.log(`[${animationId}] Complete: ${runDirectory}`);
    return {occlusion, runDirectory, utilization};
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
    const canvasFailures = [];
    const occlusionFailures = [];
    for (const animationId of animationIds) {
      const {occlusion, runDirectory, utilization} = await captureAnimation({...options, animationId, browser});
      outputDirectories.push(runDirectory);
      canvasFailures.push(...utilization.failures);
      occlusionFailures.push(...occlusion.failures.map((failure) => ({animationId, ...failure})));
    }

    console.log('\nCaptured animation pages:');
    for (const outputDirectory of outputDirectories) console.log(`- ${outputDirectory}`);

    if (canvasFailures.length > 0) {
      for (const failure of canvasFailures) {
        console.error(`CANVAS ${failure.animationId}/${failure.key}: ${failure.violations.join('; ')}`);
      }
      console.error('\nCanvas utilization audit failed: fill the dead space with real teaching content — add knowledge rows and enlarge information units; do not just rescale or pad the sparse layout.');
    }
    if (occlusionFailures.length > 0) {
      for (const failure of occlusionFailures) {
        console.error(`OCCLUSION ${failure.animationId}/${failure.label}: ${failure.overlaps.map((overlap) => `${overlap.pair} (${overlap.ratio}%)`).join('; ')}`);
      }
      console.error('\nOcclusion audit failed: an element covers text or icons while entering or at rest — rework the entry motion or the layout so nothing travels over or rests on other content.');
      process.exitCode = 1;
    }
    if (canvasFailures.length > 0) process.exitCode = 1;
  } finally {
    await browser.close({silent: true});
  }
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
