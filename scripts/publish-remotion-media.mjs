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
const PUBLIC_VIDEO_ROOT = path.join(PROJECT_ROOT, 'public', 'animation-video');
const COMPARISON_ROOT = path.join(PROJECT_ROOT, '.artifacts', 'avif-quality-comparisons');
const ANIMATION_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const SCENE_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const VIDEO_WIDTH = 2560;
const VIDEO_CRF = 35;
const VIDEO_TARGET_FPS = 15;
const RENDER_CONCURRENCY = 2;
const ENCODER_THREADS = 4;
const DEFAULT_JOBS = 2;
const MAX_JOBS = 4;
const MEDIA_FORMATS = {
  avif: {
    defaultQuality: 45,
    defaultWidth: 2560,
    directory: 'animation-avif',
    extension: 'avif',
    encoderArguments: ({crf}) => ['-c:v', 'libaom-av1', '-crf', String(crf), '-b:v', '0', '-cpu-used', '6', '-row-mt', '1', '-tiles', '2x2', '-threads', String(ENCODER_THREADS)],
    inspection: 'ffprobe',
    manifestFormat: 'animated-avif',
    maxFileSize: undefined,
    targetFps: 15,
    loopCount: 1,
    outputArguments: (loopCount) => ['-still-picture', '0', '-loop', String(loopCount), '-f', 'avif'],
    qualityToCrf: (quality) => Math.round((100 - quality) * 63 / 100),
  },
  webp: {
    defaultQuality: 42,
    defaultWidth: 1920,
    directory: 'animation-webp',
    extension: 'webp',
    encoderArguments: ({quality}) => ['-c:v', 'libwebp', '-lossless', '0', '-quality', String(quality), '-preset', 'text'],
    inspection: 'webpmux',
    manifestFormat: 'animated-webp',
    maxFileSize: undefined,
    targetFps: 'source',
    loopCount: 1,
    outputArguments: (loopCount) => ['-loop', String(loopCount), '-f', 'webp'],
    qualityToCrf: () => undefined,
  },
};
const MEDIA_FORMAT_NAMES = Object.keys(MEDIA_FORMATS);
const animationDirectories = new Map();
let bundleQueue = Promise.resolve();

const usage = `
Render every stable scene range as a standalone AV1 MP4, or compare AV1 encodings.

Usage:
  pnpm animation:publish-video [animation-id ...]
  pnpm animation:publish-video legal-jurisdiction --scene mediation-confirmation
  pnpm animation:publish-avif [--jobs 1-4] [animation-id ...]
  pnpm animation:publish-webp [--jobs 1-4] [animation-id ...]
  pnpm animation:publish-avif legal-jurisdiction --scene mediation-confirmation --widths 1920
  pnpm animation:compare-av1 legal-jurisdiction --scene mediation-confirmation --widths 1920,2560 --crfs 35,25,16

Output:
  public/animation-avif/<animation-id>/<scene-id>.avif
  public/animation-webp/<animation-id>/<scene-id>.webp
  public/animation-video/<animation-id>/<scene-id>.mp4
  .artifacts/avif-quality-comparisons/<animation-id>/<run-id>/<scene-id>.<width>x<height>.crf<value>.<avif|mp4>

Encoding contract:
  Published video: AV1 CRF ${VIDEO_CRF}, ${VIDEO_WIDTH}px wide, ${VIDEO_TARGET_FPS}fps target, MP4 faststart, no audio
  Published AVIF: q${MEDIA_FORMATS.avif.defaultQuality} (AV1 CRF 35), ${MEDIA_FORMATS.avif.defaultWidth}px wide, ${MEDIA_FORMATS.avif.targetFps}fps target, loop count ${MEDIA_FORMATS.avif.loopCount}
  Published WebP: quality ${MEDIA_FORMATS.webp.defaultQuality}, ${MEDIA_FORMATS.webp.defaultWidth}px wide, source FPS, loop count ${MEDIA_FORMATS.webp.loopCount}
`;

const parseArguments = (rawArguments) => {
  const animationIds = [];
  let mediaFormat = 'avif';
  let quality = MEDIA_FORMATS.avif.defaultQuality;
  let qualities;
  let crfs;
  let sceneId;
  let widths;
  let publishVideo = false;
  let qualityExplicit = false;
  let jobs = DEFAULT_JOBS;

  const readValue = (index, option) => {
    const value = rawArguments[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`${option} requires a value.`);
    return value;
  };
  const parseQuality = (value, option) => {
    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed < 0 || parsed > 100) {
      throw new Error(`${option} must be an integer from 0 to 100.`);
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
  const parseJobs = (value, option) => {
    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed < 1 || parsed > MAX_JOBS) {
      throw new Error(`${option} must be an integer from 1 to ${MAX_JOBS}.`);
    }
    return parsed;
  };

  for (let index = 0; index < rawArguments.length; index += 1) {
    const argument = rawArguments[index];
    if (argument === '--') continue;
    if (argument === '--help') return {help: true};
    if (argument === '--format') {
      mediaFormat = readValue(index, argument);
      index += 1;
      continue;
    }
    if (argument.startsWith('--format=')) {
      mediaFormat = argument.slice('--format='.length);
      continue;
    }
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
    if (argument === '--jobs') {
      jobs = parseJobs(readValue(index, argument), argument);
      index += 1;
      continue;
    }
    if (argument.startsWith('--jobs=')) {
      jobs = parseJobs(argument.slice('--jobs='.length), '--jobs');
      continue;
    }
    if (argument.startsWith('--')) throw new Error(`Unknown option: ${argument}`);
    animationIds.push(argument);
  }

  if (!MEDIA_FORMAT_NAMES.includes(mediaFormat)) throw new Error(`--format must be one of: ${MEDIA_FORMAT_NAMES.join(', ')}.`);
  const profile = MEDIA_FORMATS[mediaFormat];
  if (!qualityExplicit) quality = profile.defaultQuality;
  if (sceneId && !SCENE_ID_PATTERN.test(sceneId)) throw new Error(`Invalid scene ID: ${sceneId}`);
  if (publishVideo && (qualities || qualityExplicit)) throw new Error('--quality and --qualities are only available for animated-image publication.');
  if (mediaFormat !== 'avif' && crfs) throw new Error('--crfs is only available for AVIF comparisons.');
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
  const resolvedWidths = [...new Set(widths ?? [publishVideo ? VIDEO_WIDTH : profile.defaultWidth])];
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
    jobs,
    mediaFormat,
    qualities: resolvedCrfs ? undefined : resolvedQualities,
    publishVideo,
    sceneId,
    widths: resolvedWidths,
  };
};

const bundleSerially = (options) => {
  const currentBundle = bundleQueue.then(() => bundle(options));
  bundleQueue = currentBundle.catch(() => undefined);
  return currentBundle;
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
    if (candidateDirectory.startsWith(`${path.join(ANIMATIONS_ROOT, 'demo')}${path.sep}`)) continue;
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

const inspectWebp = async (filePath) => {
  const info = await runCommandCapture('webpmux', ['-info', filePath]);
  const canvas = info.match(/Canvas size\s*:\s*(\d+)\s+x\s+(\d+)/);
  const loopCount = info.match(/Loop Count\s*:\s*(\d+)/);
  const frameCount = info.match(/Number of frames:\s*(\d+)/);
  const durations = [...info.matchAll(/^\s*\d+:\s+\d+\s+\d+\s+\S+\s+\d+\s+\d+\s+(\d+)\s+/gm)]
    .map((match) => Number(match[1]));

  if (!canvas || !loopCount || !frameCount || durations.length !== Number(frameCount[1])) {
    throw new Error(`Could not inspect WebP animation metadata for ${filePath}: ${info.slice(0, 800).replaceAll(/\s+/g, ' ').trim()}`);
  }

  return {
    durationMs: durations.reduce((total, duration) => total + duration, 0),
    frameCount: Number(frameCount[1]),
    height: Number(canvas[2]),
    loopCount: Number(loopCount[1]),
    width: Number(canvas[1]),
  };
};

const inspectOutput = async ({filePath, outputFormat, profile}) => {
  if (profile.inspection === 'webpmux') {
    const info = await inspectWebp(filePath);
    return {
      codec: 'webp',
      durationMs: info.durationMs,
      formatName: 'webp',
      frameCount: info.frameCount,
      height: info.height,
      loopCount: info.loopCount,
      majorBrand: undefined,
      validFormat: true,
      width: info.width,
    };
  }

  const probe = JSON.parse(await runCommandCapture('ffprobe', [
    '-hide_banner',
    '-v', 'error',
    '-count_frames',
    '-show_streams',
    '-show_format',
    '-of', 'json',
    filePath,
  ]));
  const stream = [...(probe.streams ?? [])].reverse().find((item) => item.codec_type === 'video');
  return {
    codec: stream?.codec_name,
    durationMs: Math.round(Number(stream?.duration ?? probe.format?.duration) * 1000),
    formatName: probe.format?.format_name,
    frameCount: Number(stream?.nb_read_frames ?? stream?.nb_frames),
    height: stream?.height,
    loopCount: undefined,
    majorBrand: probe.format?.tags?.major_brand,
    validFormat: outputFormat === 'avif'
      ? probe.format?.tags?.major_brand === 'avis'
      : probe.format?.format_name?.includes('mp4'),
    width: stream?.width,
  };
};

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

const renderAnimation = async ({animationId, browserExecutable, crfs, mediaFormat, publishVideo, qualities, sceneId, widths}) => {
  const profile = MEDIA_FORMATS[mediaFormat];
  const storyboardScenes = await loadStoryboardScenes(animationId);
  const allScenes = await loadPlayerSceneMetadata(animationId, storyboardScenes);
  const scenes = sceneId ? allScenes.filter((scene) => scene.id === sceneId) : allScenes;
  if (scenes.length === 0) throw new Error(`${animationId}: scene "${sceneId}" was not found.`);
  const encodingVariants = crfs
    ? crfs.map((crf) => ({crf, quality: undefined}))
    : qualities.map((quality) => ({crf: profile.qualityToCrf(quality), quality}));
  const comparison = !publishVideo && (encodingVariants.length > 1 || widths.length > 1);
  const outputFormats = publishVideo ? ['mp4'] : crfs ? ['avif', 'mp4'] : [mediaFormat];
  const animationDirectory = getAnimationDirectory(animationId);
  const bundleDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-${mediaFormat}-bundle-${animationId}-`));
  const workDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-${mediaFormat}-frames-${animationId}-`));
  const comparisonRunId = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-');
  const targetDirectory = comparison
    ? path.join(COMPARISON_ROOT, animationId, comparisonRunId)
    : path.join(PROJECT_ROOT, 'public', publishVideo ? 'animation-video' : profile.directory, animationId);
  const stagingDirectory = `${targetDirectory}.staging-${process.pid}`;

  await rm(stagingDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
  await mkdir(stagingDirectory, {recursive: true});
  console.log(`\n[${animationId}] Bundling composition...`);

  let browser;
  try {
    const serveUrl = await bundleSerially({
      entryPoint: path.join(animationDirectory, 'remotion', 'index.ts'),
      outDir: bundleDirectory,
      publicDir: path.join(PROJECT_ROOT, 'public'),
      rootDir: PROJECT_ROOT,
      enableCaching: true,
      onProgress: () => undefined,
    });
    browser = await openBrowser('chrome', {
      browserExecutable,
      chromiumOptions: {headless: true},
      logLevel: 'error',
    });
    const compositions = await getCompositions(serveUrl, {puppeteerInstance: browser});
    const composition = selectDeckComposition(animationId, compositions);
    if (!composition) throw new Error(`${animationId}: no composition found.`);

    const targetFps = publishVideo
      ? VIDEO_TARGET_FPS
      : profile.targetFps === 'source' ? composition.fps : profile.targetFps;
    const everyNthFrame = Math.max(1, Math.round(composition.fps / targetFps));
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

        const rendered = await renderFrames({
          composition,
          serveUrl,
          outputDir: frameDirectory,
          inputProps: {},
          frameRange: [scene.start, stableEndFrame],
          everyNthFrame: 1,
          imageFormat: 'png',
          imageSequencePattern: 'frame-[frame].[ext]',
          scale,
          concurrency: RENDER_CONCURRENCY,
          muted: true,
          puppeteerInstance: browser,
          logLevel: 'error',
        });

        const expectedFrameCount = Math.ceil(rendered.frameCount / everyNthFrame);
        const expectedDurationMs = Math.round((rendered.frameCount / composition.fps) * 1000);
        sceneFrameCount = expectedFrameCount;
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
            const outputProfile = outputFormat === 'mp4' ? MEDIA_FORMATS.avif : MEDIA_FORMATS[outputFormat];
            const outputArguments = outputFormat === 'mp4'
              ? ['-tag:v', 'av01', '-movflags', '+faststart', '-f', 'mp4']
              : outputProfile.outputArguments(outputProfile.loopCount);
            const encoderArguments = outputProfile.encoderArguments(encodingVariant);
            await runCommand('ffmpeg', [
              '-hide_banner',
              '-loglevel', 'error',
              '-y',
              '-framerate', String(composition.fps),
              '-start_number', String(scene.start),
              '-i', rendered.assetsInfo.imageSequenceName,
              '-an',
              ...(everyNthFrame > 1 ? ['-vf', `fps=${outputFps}`] : []),
              ...encoderArguments,
              ...outputArguments,
              targetPath,
            ]);

            const outputInfo = await inspectOutput({filePath: targetPath, outputFormat, profile: outputProfile});
            const validCodec = outputFormat === 'webp' || outputInfo.codec === 'av1';
            if (
              !outputInfo.validFormat
              || !validCodec
              || outputInfo.width !== outputWidth
              || outputInfo.height !== outputHeight
              || outputInfo.frameCount !== expectedFrameCount
              || !Number.isFinite(outputInfo.durationMs)
              || Math.abs(outputInfo.durationMs - expectedDurationMs) > 1
              || (outputFormat !== 'mp4' && outputInfo.loopCount !== undefined && outputInfo.loopCount !== outputProfile.loopCount)
            ) {
              throw new Error(`${animationId}: ${targetFile} failed ${outputFormat.toUpperCase()} validation (${JSON.stringify({
                formatName: outputInfo.formatName,
                majorBrand: outputInfo.majorBrand,
                codec: outputInfo.codec,
                width: outputInfo.width,
                height: outputInfo.height,
                frameCount: outputInfo.frameCount,
                expectedFrameCount,
                durationMs: outputInfo.durationMs,
                expectedDurationMs,
                loopCount: outputInfo.loopCount,
              })}).`);
            }

            const fileSize = (await stat(targetPath)).size;
            if (outputProfile.maxFileSize && fileSize > outputProfile.maxFileSize) {
              throw new Error(`${animationId}: ${targetFile} exceeds the ${outputProfile.maxFileSize}-byte ${outputFormat.toUpperCase()} limit (${fileSize} bytes).`);
            }
            outputs.push({durationMs: outputInfo.durationMs, file: targetFile, fileSize, format: outputFormat});
            const qualityLabel = encodingVariant.crf === undefined ? `quality ${encodingVariant.quality}` : `CRF ${encodingVariant.crf}`;
            console.log(`[${animationId}] ${scene.id} ${resolutionLabel} ${qualityLabel} ${outputFormat.toUpperCase()}: ${(fileSize / 1024 / 1024).toFixed(2)} MiB`);
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
      format: publishVideo ? 'av1-mp4' : profile.manifestFormat,
      generatedAt: new Date().toISOString(),
      loopCount: publishVideo ? undefined : profile.loopCount,
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
    if (browser) await browser.close({silent: true});
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

  await mkdir(options.publishVideo ? PUBLIC_VIDEO_ROOT : options.crfs ? COMPARISON_ROOT : path.join(PROJECT_ROOT, 'public', MEDIA_FORMATS[options.mediaFormat].directory), {recursive: true});
  const browserExecutable = await findBrowserExecutable();
  if (browserExecutable) console.log(`Using browser: ${browserExecutable}`);
  const manifests = new Array(animationIds.length);
  let nextAnimationIndex = 0;
  const workerCount = Math.min(options.jobs, animationIds.length);
  console.log(`Running ${animationIds.length} animation(s) with ${workerCount} concurrent job(s).`);

  const renderNext = async () => {
    while (nextAnimationIndex < animationIds.length) {
      const animationIndex = nextAnimationIndex;
      nextAnimationIndex += 1;
      manifests[animationIndex] = await renderAnimation({
        animationId: animationIds[animationIndex],
        browserExecutable,
        crfs: options.crfs,
        mediaFormat: options.mediaFormat,
        publishVideo: options.publishVideo,
        qualities: options.qualities,
        sceneId: options.sceneId,
        widths: options.widths,
      });
    }
  };

  const workerResults = await Promise.allSettled(
    Array.from({length: workerCount}, () => renderNext()),
  );
  const failedWorker = workerResults.find((result) => result.status === 'rejected');
  if (failedWorker?.status === 'rejected') throw failedWorker.reason;
  const totalSize = manifests.reduce((sum, manifest) => sum + manifest.totalFileSize, 0);
  console.log(`\nPublished ${manifests.length} animations, ${manifests.reduce((sum, manifest) => sum + manifest.scenes.length, 0)} scenes, ${(totalSize / 1024 / 1024).toFixed(2)} MiB.`);
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
