import {mkdtemp, mkdir, readdir, rm, stat, writeFile} from 'node:fs/promises';
import {homedir, tmpdir} from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {bundle} from '@remotion/bundler';
import {getCompositions, openBrowser, renderStill} from '@remotion/renderer';
import sharp from 'sharp';

const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');
const DEFAULT_OUTPUT_ROOT = path.join(PROJECT_ROOT, '.artifacts', 'animation-pages');
const DEFAULT_CAPTURE_RATIO = 0.82;
const ANIMATION_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const animationDirectories = new Map();

const usage = `
Capture a complete still for every Remotion page.

Usage:
  pnpm animation:pages                         Capture every discovered animation
  pnpm animation:pages legal-jurisdiction      Capture one animation
  pnpm animation:pages proper-party party-change
  pnpm animation:pages --at 0.75               Change the scene capture position
  pnpm animation:pages --output D:\\captures   Choose an output root

Options:
  --all              Capture every discovered animation (the default)
  --at <0..1>        Position within each scene (default: ${DEFAULT_CAPTURE_RATIO})
  --output <path>    Output root (default: .artifacts/animation-pages)
  --help             Show this help
`;

const parseArguments = (rawArguments) => {
  const animationIds = [];
  let captureRatio = DEFAULT_CAPTURE_RATIO;
  let outputRoot = DEFAULT_OUTPUT_ROOT;
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
      index += 1;
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
  if (!captureAll && animationIds.length === 0) captureAll = true;

  return {animationIds, captureAll, captureRatio, help: false, outputRoot};
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

    return {duration: scene.duration, key, start: scene.start};
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

const captureAnimation = async ({animationId, browser, captureRatio, outputRoot}) => {
  const scenes = await loadScenes(animationId);
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
    const pages = [];

    for (let index = 0; index < scenes.length; index += 1) {
      const scene = scenes[index];
      const frame = Math.min(
        composition.durationInFrames - 1,
        scene.start + Math.floor((scene.duration - 1) * captureRatio),
      );
      const pageNumber = String(index + 1).padStart(2, '0');
      const fileName = `page-${pageNumber}-${scene.key}.png`;
      const outputPath = path.join(runDirectory, fileName);

      console.log(`[${animationId}] ${pageNumber}/${String(scenes.length).padStart(2, '0')} ${scene.key} @ frame ${frame}`);
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

      pages.push({...scene, file: fileName, frame});
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
      captureRatio,
      compositionId: composition.id,
      capturedAt: new Date().toISOString(),
      size: {width: composition.width, height: composition.height},
      pages,
    };
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
