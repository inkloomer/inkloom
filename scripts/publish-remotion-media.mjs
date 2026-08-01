import {spawn} from 'node:child_process';
import {createHash} from 'node:crypto';
import {cp, mkdtemp, mkdir, readFile, readdir, rename, rm, stat, writeFile} from 'node:fs/promises';
import {homedir, tmpdir} from 'node:os';
import path from 'node:path';
import {Readable} from 'node:stream';
import {pathToFileURL} from 'node:url';
import {bundle} from '@remotion/bundler';
import {getCompositions, openBrowser, renderFrames} from '@remotion/renderer';
const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');
const COMPONENTS_ROOT = path.join(PROJECT_ROOT, 'src', 'components');
const PUBLIC_VIDEO_ROOT = path.join(PROJECT_ROOT, 'public', 'animation-video');
const COMPARISON_ROOT = path.join(PROJECT_ROOT, '.artifacts', 'avif-quality-comparisons');
const BUNDLE_CACHE_ROOT = path.join(PROJECT_ROOT, '.artifacts', 'remotion-bundles');
const ANIMATION_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const SCENE_ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const VIDEO_WIDTH = 2560;
const VIDEO_CRF = 35;
const VIDEO_TARGET_FPS = 15;
const RENDER_CONCURRENCY = 2;
const ENCODER_THREADS = 4;
const SINGLE_WORKER_ENCODER_THREADS = 8;
const DEFAULT_JOBS = 2;
const MAX_JOBS = 4;
const MEDIA_FORMATS = {
  avif: {
    defaultQuality: 45,
    defaultWidth: 2560,
    directory: 'animation-avif',
    extension: 'avif',
    encoderArguments: ({crf, encoderThreads = ENCODER_THREADS}) => ['-c:v', 'libaom-av1', '-crf', String(crf), '-b:v', '0', '-pix_fmt', 'gbrp', '-cpu-used', '6', '-row-mt', '1', '-tiles', '2x2', '-threads', String(encoderThreads)],
    inspection: 'ffprobe',
    manifestFormat: 'animated-avif',
    maxFileSize: undefined,
    targetFps: 30,
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
let browserExecutablePromise;
let ffmpegCheckPromise;
let runtimeFingerprintPromise;

const usage = `
Render every stable scene range as a standalone AV1 MP4, or compare AV1 encodings.

Usage:
  pnpm animation:publish-video [animation-id ...]
  pnpm animation:publish-video legal-jurisdiction --scene mediation-confirmation
  pnpm animation:publish-avif [--jobs 1-4] [animation-id ...]
  pnpm animation:publish-avif --force [animation-id ...]
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
  let force = false;
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
    if (argument === '--force') {
      force = true;
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
    force,
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

const getBrowserExecutable = () => {
  browserExecutablePromise ??= findBrowserExecutable();
  return browserExecutablePromise;
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

const resolveLocalImport = async (sourceFile, specifier) => {
  const unresolvedPath = specifier.startsWith('@/')
    ? path.join(PROJECT_ROOT, 'src', specifier.slice(2))
    : specifier.startsWith('.')
      ? path.resolve(path.dirname(sourceFile), specifier)
      : null;
  if (!unresolvedPath) return null;
  const candidates = [
    unresolvedPath,
    ...['.ts', '.tsx', '.js', '.jsx', '.json', '.css'].map((extension) => `${unresolvedPath}${extension}`),
    ...['index.ts', 'index.tsx', 'index.js', 'index.jsx'].map((fileName) => path.join(unresolvedPath, fileName)),
  ];
  for (const candidate of candidates) {
    if (await fileExists(candidate)) return candidate;
  }
  return null;
};

const collectRenderDependencies = async (entryPoint) => {
  const dependencies = new Set();
  const queue = [entryPoint];
  const textExtensions = new Set(['.css', '.js', '.jsx', '.ts', '.tsx']);

  while (queue.length > 0) {
    const filePath = path.resolve(queue.pop());
    if (dependencies.has(filePath)) continue;
    dependencies.add(filePath);
    if (!textExtensions.has(path.extname(filePath).toLowerCase())) continue;
    const source = await readFile(filePath, 'utf8');
    const specifiers = [
      ...source.matchAll(/(?:import|export)\s+(?:[^;]*?\sfrom\s*)?['"]([^'"]+)['"]/g),
      ...source.matchAll(/import\(\s*['"]([^'"]+)['"]\s*\)/g),
    ].map((match) => match[1]);
    for (const specifier of specifiers) {
      const dependency = await resolveLocalImport(filePath, specifier);
      if (dependency) queue.push(dependency);
    }
    for (const match of source.matchAll(/staticFile\(\s*['"]([^'"]+)['"]\s*\)/g)) {
      const publicPath = path.join(PROJECT_ROOT, 'public', match[1].replace(/^[/\\]+/, ''));
      if (await fileExists(publicPath)) queue.push(publicPath);
    }
    if (path.extname(filePath).toLowerCase() === '.css') {
      for (const match of source.matchAll(/url\(\s*['"]?([^'"\)]+)['"]?\s*\)/g)) {
        const asset = match[1].trim();
        if (/^(?:data:|https?:|#)/i.test(asset)) continue;
        const assetPath = path.resolve(path.dirname(filePath), asset);
        if (await fileExists(assetPath)) queue.push(assetPath);
      }
    }
  }

  return [...dependencies];
};

const sha256File = async (filePath) => createHash('sha256')
  .update(await readFile(filePath))
  .digest('hex');

const hashFiles = async ({files, seed}) => {
  const fingerprint = createHash('sha256');
  fingerprint.update(JSON.stringify(seed));
  for (const filePath of [...new Set(files)].sort((left, right) => left.localeCompare(right))) {
    fingerprint.update(`\0${path.relative(PROJECT_ROOT, filePath).replaceAll(path.sep, '/')}\0`);
    fingerprint.update(await readFile(filePath));
  }
  return fingerprint.digest('hex');
};

const collectBundleSourceFiles = async (animationDirectory) => [
  ...(await collectRenderDependencies(path.join(animationDirectory, 'remotion', 'index.ts'))),
  path.join(PROJECT_ROOT, 'package.json'),
  path.join(PROJECT_ROOT, 'pnpm-lock.yaml'),
];

const createBundleFingerprint = async (animationDirectory) => hashFiles({
  files: await collectBundleSourceFiles(animationDirectory),
  seed: {format: 'inkloom-remotion-bundle-v1'},
});

const scanDeclarationEnd = (source, start) => {
  let quote;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;
  const depth = {brace: 0, bracket: 0, parenthesis: 0};

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    const next = source[index + 1];
    if (lineComment) {
      if (character === '\n') lineComment = false;
      continue;
    }
    if (blockComment) {
      if (character === '*' && next === '/') {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (!escaped && character === quote) quote = undefined;
      escaped = !escaped && character === '\\';
      if (character !== '\\') escaped = false;
      continue;
    }
    if (character === '/' && next === '/') {
      lineComment = true;
      index += 1;
      continue;
    }
    if (character === '/' && next === '*') {
      blockComment = true;
      index += 1;
      continue;
    }
    if (character === '"' || character === "'" || character === '`') {
      quote = character;
      continue;
    }
    if (character === '{') depth.brace += 1;
    if (character === '}') depth.brace -= 1;
    if (character === '[') depth.bracket += 1;
    if (character === ']') depth.bracket -= 1;
    if (character === '(') depth.parenthesis += 1;
    if (character === ')') depth.parenthesis -= 1;
    if (character === ';' && depth.brace === 0 && depth.bracket === 0 && depth.parenthesis === 0) return index + 1;
  }
  return source.length;
};

const extractExportedComponentDeclarations = (source) => {
  const declarations = new Map();
  for (const match of source.matchAll(/^export\s+const\s+([A-Za-z_$][\w$]*)\b/gm)) {
    const start = match.index;
    declarations.set(match[1], {end: scanDeclarationEnd(source, start), start});
  }
  return declarations;
};

const extractNamedLocalImports = async (sourceFile, source) => {
  const imports = new Map();
  for (const match of source.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g)) {
    const sourcePath = await resolveLocalImport(sourceFile, match[2]);
    if (!sourcePath) continue;
    for (const entry of match[1].split(',')) {
      const [imported, local = imported] = entry.trim().split(/\s+as\s+/);
      if (imported && local) imports.set(local.trim(), {imported: imported.trim(), sourcePath});
    }
  }
  return imports;
};

const sceneComponentPattern = (storyboardKey) => new RegExp(
  `<TimelineSequence\\b[^>]*?\\.\\.\\.SCENES\\.${storyboardKey}[^>]*>\\s*<([A-Za-z_$][\\w$]*)\\b`,
  's',
);

const findSceneComponentBindings = async ({allScenes, animationDirectory}) => {
  const remotionDirectory = path.join(animationDirectory, 'remotion');
  const candidates = await listFiles(remotionDirectory, (fileName) => fileName.endsWith('.tsx'));
  for (const candidatePath of candidates) {
    const source = await readFile(candidatePath, 'utf8');
    if (!source.includes('TimelineSequence')) continue;
    const bindings = new Map();
    const imports = await extractNamedLocalImports(candidatePath, source);
    for (const scene of allScenes) {
      const componentName = source.match(sceneComponentPattern(scene.key))?.[1];
      const imported = componentName ? imports.get(componentName) : undefined;
      if (!componentName || !imported) {
        bindings.clear();
        break;
      }
      bindings.set(scene.id, {...imported, componentName, sequencePath: candidatePath});
    }
    if (bindings.size === allScenes.length) return bindings;
  }
  return null;
};

const createSceneModuleFingerprint = async ({componentName, sourcePath}) => {
  const source = await readFile(sourcePath, 'utf8');
  const declarations = extractExportedComponentDeclarations(source);
  const component = declarations.get(componentName);
  if (!component) return null;

  const required = new Set([componentName]);
  const pending = [componentName];
  while (pending.length > 0) {
    const name = pending.pop();
    const declaration = declarations.get(name);
    if (!declaration) continue;
    const declarationSource = source.slice(declaration.start, declaration.end);
    for (const candidate of declarations.keys()) {
      if (candidate !== name && !required.has(candidate) && new RegExp(`\\b${candidate}\\b`).test(declarationSource)) {
        required.add(candidate);
        pending.push(candidate);
      }
    }
  }

  const included = [...required].map((name) => declarations.get(name)).sort((left, right) => left.start - right.start);
  const excluded = [...declarations.values()]
    .filter((declaration) => !included.includes(declaration))
    .sort((left, right) => left.start - right.start);
  const common = [];
  let cursor = 0;
  for (const declaration of excluded) {
    common.push(source.slice(cursor, declaration.start));
    cursor = declaration.end;
  }
  common.push(source.slice(cursor));
  return {
    common: common.join(''),
    component: included.map((declaration) => source.slice(declaration.start, declaration.end)).join(''),
  };
};

const createSceneFingerprints = async ({
  allScenes,
  animationDirectory,
  encodingVariants,
  mediaFormat,
  outputFormats,
  profile,
  publishVideo,
  runtimeFingerprint,
  sourceFingerprint,
  widths,
}) => {
  const bindings = await findSceneComponentBindings({allScenes, animationDirectory});
  if (!bindings) return new Map(allScenes.map((scene) => [scene.id, sourceFingerprint]));
  const sharedDirectory = path.join(ANIMATIONS_ROOT, 'shared');
  const globalCandidates = [
    ...(await listFiles(sharedDirectory, () => true)),
    path.join(animationDirectory, 'remotion', 'Root.tsx'),
    path.join(animationDirectory, 'remotion', 'storyboard.ts'),
    path.join(PROJECT_ROOT, 'package.json'),
    path.join(PROJECT_ROOT, 'pnpm-lock.yaml'),
    path.join(import.meta.dirname, 'publish-remotion-media.mjs'),
  ];
  const globalFiles = [];
  for (const filePath of globalCandidates) {
    if (await fileExists(filePath)) globalFiles.push(filePath);
  }
  const fingerprints = new Map();

  for (const scene of allScenes) {
    const binding = bindings.get(scene.id);
    const moduleFingerprint = await createSceneModuleFingerprint(binding);
    if (!moduleFingerprint) {
      fingerprints.set(scene.id, sourceFingerprint);
      continue;
    }
    const dependencyFiles = [
      ...(await collectRenderDependencies(binding.sourcePath)).filter((filePath) => filePath !== binding.sourcePath),
      binding.sequencePath,
    ];
    const fingerprint = createHash('sha256');
    fingerprint.update(JSON.stringify({
      encodingVariants,
      mediaFormat,
      outputFormats,
      profile: {
        encoderArguments: profile.encoderArguments({...encodingVariants[0], encoderThreads: '<runtime>'}),
        loopCount: publishVideo ? undefined : profile.loopCount,
        targetFps: publishVideo ? VIDEO_TARGET_FPS : profile.targetFps,
      },
      publishVideo,
      runtimeFingerprint,
      scene,
      widths,
    }));
    fingerprint.update(`\0component-common\0${moduleFingerprint.common}`);
    fingerprint.update(`\0component-${binding.componentName}\0${moduleFingerprint.component}`);
    for (const filePath of [...new Set([...globalFiles, ...dependencyFiles])].sort((left, right) => left.localeCompare(right))) {
      fingerprint.update(`\0${path.relative(PROJECT_ROOT, filePath).replaceAll(path.sep, '/')}\0`);
      fingerprint.update(await readFile(filePath));
    }
    fingerprints.set(scene.id, fingerprint.digest('hex'));
  }
  return fingerprints;
};

const createPublicationFingerprint = async ({
  allScenes,
  animationDirectory,
  encodingVariants,
  mediaFormat,
  outputFormats,
  profile,
  publishVideo,
  runtimeFingerprint,
  widths,
}) => {
  const sharedDirectory = path.join(ANIMATIONS_ROOT, 'shared');
  const sourceFiles = [...new Set([
    ...(await listFiles(animationDirectory, () => true)),
    ...(await listFiles(sharedDirectory, () => true)),
    ...(await collectRenderDependencies(path.join(animationDirectory, 'remotion', 'index.ts'))),
    path.join(PROJECT_ROOT, 'package.json'),
    path.join(PROJECT_ROOT, 'pnpm-lock.yaml'),
    path.join(import.meta.dirname, 'publish-remotion-media.mjs'),
  ])].sort((left, right) => left.localeCompare(right));
  const fingerprint = createHash('sha256');
  fingerprint.update(JSON.stringify({
    allScenes,
    encodingVariants,
    mediaFormat,
    outputFormats,
    profile: {
      encoderArguments: profile.encoderArguments({...encodingVariants[0], encoderThreads: '<runtime>'}),
      loopCount: publishVideo ? undefined : profile.loopCount,
      manifestFormat: publishVideo ? 'av1-mp4' : profile.manifestFormat,
      outputArguments: publishVideo
        ? ['-tag:v', 'av01', '-movflags', '+faststart', '-f', 'mp4']
        : profile.outputArguments(profile.loopCount),
      targetFps: publishVideo ? VIDEO_TARGET_FPS : profile.targetFps,
    },
    publishVideo,
    runtimeFingerprint,
    widths,
  }));

  for (const filePath of sourceFiles) {
    fingerprint.update(`\0${path.relative(PROJECT_ROOT, filePath).replaceAll(path.sep, '/')}\0`);
    fingerprint.update(await readFile(filePath));
  }

  return fingerprint.digest('hex');
};

const readReusableManifest = async ({allScenes, expected, sourceFingerprint, targetDirectory}) => {
  let manifest;
  try {
    manifest = JSON.parse(await readFile(path.join(targetDirectory, 'manifest.json'), 'utf8'));
  } catch {
    return null;
  }

  const expectedTargetFps = expected.targetFps === 'source'
    ? manifest.sourceFps
    : manifest.sourceFps / Math.max(1, Math.round(manifest.sourceFps / expected.targetFps));
  if (
    manifest.sourceFingerprint !== sourceFingerprint
    || manifest.animationId !== expected.animationId
    || manifest.format !== expected.format
    || manifest.crf !== expected.crf
    || manifest.quality !== expected.quality
    || manifest.loopCount !== expected.loopCount
    || manifest.size?.width !== expected.width
    || !Number.isFinite(expectedTargetFps)
    || manifest.targetFps !== expectedTargetFps
    || !Array.isArray(manifest.scenes)
  ) return null;
  if (JSON.stringify(manifest.scenes.map((scene) => scene.id)) !== JSON.stringify(allScenes.map((scene) => scene.id))) return null;

  const validatedScenes = await Promise.all(allScenes.map(async (scene) => {
    const published = manifest.scenes.find((candidate) => candidate.id === scene.id);
    const expectedEndFrame = scene.start + scene.duration - 1 - scene.previewEndTrimFrames;
    if (
      !published
      || published.number !== scene.number
      || published.title !== scene.title
      || published.startFrame !== scene.start
      || published.endFrame !== expectedEndFrame
      || published.crf !== expected.crf
      || published.quality !== expected.quality
      || published.format !== expected.outputFormat
      || published.pixelFormat !== expected.pixelFormat
      || published.file !== `${scene.id}.${expected.extension}`
      || typeof published.file !== 'string'
      || path.basename(published.file) !== published.file
      || typeof published.sha256 !== 'string'
      || !/^[a-f0-9]{64}$/i.test(published.sha256)
    ) return null;
    const publishedPath = path.join(targetDirectory, published.file);
    try {
      const fileSize = (await stat(publishedPath)).size;
      if (fileSize !== published.fileSize || await sha256File(publishedPath) !== published.sha256) return null;
      return published;
    } catch {
      return null;
    }
  }));

  if (validatedScenes.some((scene) => scene === null)) return null;
  const totalFileSize = validatedScenes.reduce((sum, scene) => sum + scene.fileSize, 0);
  if (manifest.totalFileSize !== totalFileSize) return null;
  return manifest;
};

const readReusableScene = async ({expected, manifest, scene, sceneFingerprint, targetDirectory}) => {
  if (!manifest || manifest.animationId !== expected.animationId || manifest.format !== expected.format
    || manifest.crf !== expected.crf || manifest.quality !== expected.quality
    || manifest.loopCount !== expected.loopCount || manifest.size?.width !== expected.width
    || manifest.targetFps !== expected.targetFps) return null;
  const published = manifest.scenes?.find((candidate) => candidate.id === scene.id);
  const expectedEndFrame = scene.start + scene.duration - 1 - scene.previewEndTrimFrames;
  if (
    !published
    || published.number !== scene.number
    || published.title !== scene.title
    || published.startFrame !== scene.start
    || published.endFrame !== expectedEndFrame
    || published.crf !== expected.crf
    || published.quality !== expected.quality
    || published.format !== expected.outputFormat
    || published.pixelFormat !== expected.pixelFormat
    || published.sceneFingerprint !== sceneFingerprint
    || published.file !== `${scene.id}.${expected.extension}`
    || typeof published.sha256 !== 'string'
    || !/^[a-f0-9]{64}$/i.test(published.sha256)
  ) return null;
  try {
    const publishedPath = path.join(targetDirectory, published.file);
    const fileSize = (await stat(publishedPath)).size;
    return fileSize === published.fileSize && await sha256File(publishedPath) === published.sha256
      ? published
      : null;
  } catch {
    return null;
  }
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

const runCommandWithInput = (command, args, buffers) => new Promise((resolve, reject) => {
  const child = spawn(command, args, {stdio: ['pipe', 'inherit', 'inherit'], windowsHide: true});
  const input = Readable.from(buffers);
  let settled = false;

  const fail = (error) => {
    if (settled) return;
    settled = true;
    reject(error);
  };

  child.once('error', fail);
  child.stdin.once('error', fail);
  input.once('error', fail);
  child.once('exit', (code, signal) => {
    if (settled) return;
    settled = true;
    if (code === 0) {
      resolve();
      return;
    }
    reject(new Error(`${command} exited with ${signal ? `signal ${signal}` : `code ${code}`}.`));
  });
  input.pipe(child.stdin);
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

const ensureFfmpeg = () => {
  ffmpegCheckPromise ??= runCommandCapture('ffmpeg', ['-hide_banner', '-version']).then((output) => output.trim());
  return ffmpegCheckPromise;
};

const createFontEnvironmentFingerprint = async () => {
  const candidates = process.platform === 'win32'
    ? [
        path.join(process.env.WINDIR ?? 'C:\\Windows', 'Fonts'),
        process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, 'Microsoft', 'Windows', 'Fonts') : null,
      ]
    : process.platform === 'darwin'
      ? ['/System/Library/Fonts', '/Library/Fonts', path.join(homedir(), 'Library', 'Fonts')]
      : ['/usr/share/fonts', '/usr/local/share/fonts', path.join(homedir(), '.local', 'share', 'fonts')];
  const fontFiles = [];
  for (const directory of candidates.filter(Boolean)) {
    if (await pathExists(directory)) fontFiles.push(...(await listFiles(directory, () => true)));
  }
  const fingerprint = createHash('sha256');
  for (const filePath of fontFiles.sort((left, right) => left.localeCompare(right))) {
    const info = await stat(filePath);
    fingerprint.update(`${filePath}\0${info.size}\0${info.mtimeMs}\0`);
  }
  return fingerprint.digest('hex');
};

const getRuntimeFingerprint = () => {
  runtimeFingerprintPromise ??= (async () => {
    const [browserExecutable, ffmpegVersion, fontEnvironment] = await Promise.all([
      getBrowserExecutable(),
      ensureFfmpeg(),
      createFontEnvironmentFingerprint(),
    ]);
    const browserInfo = browserExecutable ? await stat(browserExecutable) : undefined;
    return {
      browserExecutable,
      browserMtimeMs: browserInfo?.mtimeMs,
      browserSize: browserInfo?.size,
      ffmpegVersion,
      fontEnvironment,
      node: process.versions.node,
      platform: `${process.platform}-${process.arch}`,
    };
  })();
  return runtimeFingerprintPromise;
};

const createRenderRuntime = () => ({bundlePromises: new Map(), browserPromise: undefined, temporaryBundles: new Set()});

const getSharedBrowser = ({browserExecutable, runtime}) => {
  runtime.browserPromise ??= openBrowser('chrome', {
    browserExecutable,
    chromiumOptions: {headless: true},
    logLevel: 'error',
  });
  return runtime.browserPromise;
};

const getBundledServeUrl = async ({animationDirectory, animationId, bundleFingerprint, force, runtime}) => {
  const cacheDirectory = path.join(BUNDLE_CACHE_ROOT, `${animationId}-${bundleFingerprint}`);
  const cacheReady = path.join(cacheDirectory, '.inkloom-bundle-ready');
  if (!force && await fileExists(cacheReady)) {
    console.log(`[${animationId}] Reusing cached Remotion bundle.`);
    return cacheDirectory;
  }
  const cacheKey = force ? `${cacheDirectory}-${Date.now()}` : cacheDirectory;
  const existing = runtime.bundlePromises.get(cacheKey);
  if (existing) return existing;

  const bundlePromise = (async () => {
    if (force) {
      const temporaryDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-bundle-${animationId}-`));
      runtime.temporaryBundles.add(temporaryDirectory);
      return bundleSerially({
        entryPoint: path.join(animationDirectory, 'remotion', 'index.ts'),
        outDir: temporaryDirectory,
        publicDir: path.join(PROJECT_ROOT, 'public'),
        rootDir: PROJECT_ROOT,
        enableCaching: true,
        onProgress: () => undefined,
      });
    }

    await mkdir(BUNDLE_CACHE_ROOT, {recursive: true});
    if (await fileExists(cacheReady)) return cacheDirectory;
    if (await pathExists(cacheDirectory)) {
      await rm(cacheDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
    }
    const stagingDirectory = `${cacheDirectory}.staging-${process.pid}-${Date.now()}`;
    await rm(stagingDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
    try {
      await bundleSerially({
        entryPoint: path.join(animationDirectory, 'remotion', 'index.ts'),
        outDir: stagingDirectory,
        publicDir: path.join(PROJECT_ROOT, 'public'),
        rootDir: PROJECT_ROOT,
        enableCaching: true,
        onProgress: () => undefined,
      });
      if (await fileExists(cacheReady)) {
        await rm(stagingDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
        return cacheDirectory;
      }
      await cp(stagingDirectory, cacheDirectory, {force: true, recursive: true});
      await writeFile(cacheReady, 'ready\n', 'utf8');
      await rm(stagingDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150})
        .catch((error) => console.warn(`[${animationId}] Could not remove temporary bundle cache: ${error.message}`));
      return cacheDirectory;
    } catch (error) {
      await rm(stagingDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
      throw error;
    }
  })();
  runtime.bundlePromises.set(cacheKey, bundlePromise);
  try {
    return await bundlePromise;
  } finally {
    runtime.bundlePromises.delete(cacheKey);
  }
};

const closeRenderRuntime = async (runtime) => {
  if (runtime.browserPromise) {
    try {
      const browser = await runtime.browserPromise;
      await browser.close({silent: true});
    } catch {
      // A failed lazy browser launch has no process to close.
    }
  }
  await Promise.all([...runtime.temporaryBundles].map((directory) => rm(directory, {
    force: true,
    maxRetries: 12,
    recursive: true,
    retryDelay: 150,
  })));
};

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
      pixelFormat: undefined,
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
    pixelFormat: stream?.pix_fmt,
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

const processIsRunning = (pid) => {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return error?.code === 'EPERM';
  }
};

const removeOrphanedStagingDirectories = async (targetDirectory) => {
  const parentDirectory = path.dirname(targetDirectory);
  const stagingPrefix = `${path.basename(targetDirectory)}.staging-`;
  const entries = await readdir(parentDirectory, {withFileTypes: true}).catch((error) => {
    if (error?.code === 'ENOENT') return [];
    throw error;
  });

  for (const entry of entries) {
    if (!entry.isDirectory() || !entry.name.startsWith(stagingPrefix)) continue;
    const pidText = entry.name.slice(stagingPrefix.length);
    if (!/^\d+$/.test(pidText) || processIsRunning(Number(pidText))) continue;
    await rm(path.join(parentDirectory, entry.name), {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
    console.log(`[cleanup] Removed orphaned staging directory: ${entry.name}`);
  }
};

const readExistingManifest = async (targetDirectory, animationId) => {
  const manifestPath = path.join(targetDirectory, 'manifest.json');
  if (!(await pathExists(manifestPath))) {
    throw new Error(`${animationId}: --scene atomic replacement requires an existing published manifest. Run a full publish first.`);
  }

  try {
    return JSON.parse(await readFile(manifestPath, 'utf8'));
  } catch (error) {
    throw new Error(`${animationId}: cannot read the existing published manifest for --scene replacement (${error.message}).`);
  }
};

const assertAtomicSceneCompatibility = async ({
  allScenes,
  animationId,
  composition,
  crf,
  everyNthFrame,
  format,
  loopCount,
  manifest,
  outputFormat,
  outputFps,
  outputHeight,
  outputWidth,
  profile,
  quality,
  sceneId,
  targetDirectory,
}) => {
  const expectedSceneIds = allScenes.map((scene) => scene.id);
  const publishedSceneIds = Array.isArray(manifest.scenes) ? manifest.scenes.map((scene) => scene.id) : [];
  const expectedExistingSceneIds = expectedSceneIds.filter((id) => id !== sceneId);
  const compatibleSceneIds = JSON.stringify(publishedSceneIds) === JSON.stringify(expectedSceneIds)
    || (!publishedSceneIds.includes(sceneId)
      && JSON.stringify(publishedSceneIds) === JSON.stringify(expectedExistingSceneIds));
  const mismatches = [];
  const sameValue = (label, actual, expected) => {
    if (actual !== expected) mismatches.push(`${label} is ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
  };

  sameValue('animationId', manifest.animationId, animationId);
  sameValue('compositionId', manifest.compositionId, composition.id);
  sameValue('format', manifest.format, format);
  sameValue('quality', manifest.quality, quality);
  sameValue('crf', manifest.crf, crf);
  sameValue('loopCount', manifest.loopCount, loopCount);
  sameValue('size.width', manifest.size?.width, outputWidth);
  sameValue('size.height', manifest.size?.height, outputHeight);
  sameValue('sourceFps', manifest.sourceFps, composition.fps);
  sameValue('targetFps', manifest.targetFps, outputFps);
  if (!compatibleSceneIds) {
    mismatches.push(`scene IDs are ${JSON.stringify(publishedSceneIds)}, expected the full list ${JSON.stringify(expectedSceneIds)} or that list without the selected scene ${JSON.stringify(sceneId)}`);
  }

  for (const scene of allScenes) {
    if (scene.id === sceneId) continue;
    const published = manifest.scenes?.find((candidate) => candidate.id === scene.id);
    if (!published) continue;
    const stableEndFrame = Math.min(
      composition.durationInFrames - 1,
      scene.start + scene.duration - 1 - scene.previewEndTrimFrames,
    );
    if (published.number !== scene.number || published.title !== scene.title) {
      mismatches.push(`${scene.id} metadata no longer matches the player descriptor`);
    }
    if (published.startFrame !== scene.start || published.endFrame !== stableEndFrame) {
      mismatches.push(`${scene.id} frame range is ${published.startFrame}-${published.endFrame}, expected ${scene.start}-${stableEndFrame}`);
    }
    const publishedPath = typeof published.file === 'string'
      ? path.join(targetDirectory, published.file)
      : undefined;
    if (!publishedPath || !(await pathExists(publishedPath))) {
      mismatches.push(`${scene.id} published file is missing`);
      continue;
    }

    const expectedFrameCount = Math.round((stableEndFrame - scene.start + 1) / everyNthFrame);
    const expectedDurationMs = Math.round((expectedFrameCount / outputFps) * 1000);
    const outputInfo = await inspectOutput({filePath: publishedPath, outputFormat, profile});
    if (
      !outputInfo.validFormat
      || outputInfo.width !== outputWidth
      || outputInfo.height !== outputHeight
      || (outputFormat !== 'webp' && outputInfo.pixelFormat !== 'gbrp')
      || outputInfo.frameCount !== expectedFrameCount
      || !Number.isFinite(outputInfo.durationMs)
      || Math.abs(outputInfo.durationMs - expectedDurationMs) > 1
    ) {
      mismatches.push(`${scene.id} published file has incompatible media metadata`);
      continue;
    }
    published.fileSize = (await stat(publishedPath)).size;
  }

  if (mismatches.length > 0) {
    throw new Error(`${animationId}: --scene atomic replacement is incompatible with the existing publication:\n- ${mismatches.join('\n- ')}\nRun a full publish first.`);
  }
};

const renderSceneFrames = async ({animationId, browser, composition, everyNthFrame, outputFps, scene, sceneCount, serveUrl, widths}) => {
  const stableEndFrame = Math.min(
    composition.durationInFrames - 1,
    scene.start + scene.duration - 1 - scene.previewEndTrimFrames,
  );
  const resolutions = [];

  for (const outputWidth of widths) {
    const scale = outputWidth / composition.width;
    const outputHeight = Math.round(composition.height * scale);
    const resolutionLabel = `${outputWidth}x${outputHeight}`;
    console.log(`[${animationId}] ${scene.number}/${String(sceneCount).padStart(2, '0')} ${scene.id}: rendering ${resolutionLabel} at ${outputFps}fps, source frames ${scene.start}-${stableEndFrame}`);
    const renderStartedAt = performance.now();
    const frameBuffers = new Map();
    const rendered = await renderFrames({
      composition,
      serveUrl,
      outputDir: null,
      inputProps: {},
      frameRange: [scene.start, stableEndFrame],
      everyNthFrame,
      imageFormat: 'png',
      onFrameBuffer: (buffer, frame) => frameBuffers.set(frame, buffer),
      scale,
      concurrency: RENDER_CONCURRENCY,
      muted: true,
      puppeteerInstance: browser,
      logLevel: 'error',
    });
    const expectedFrameCount = rendered.frameCount;
    const sourceFrames = Array.from({length: expectedFrameCount}, (_, frameIndex) => scene.start + frameIndex * everyNthFrame);
    const missingFrames = sourceFrames.filter((frame) => !frameBuffers.has(frame));
    if (frameBuffers.size !== expectedFrameCount || missingFrames.length > 0) {
      throw new Error(`${animationId}: ${scene.id} rendered ${frameBuffers.size}/${expectedFrameCount} target frames; missing ${missingFrames.join(', ') || 'unknown'}.`);
    }
    const orderedFrameBuffers = sourceFrames.map((frame) => frameBuffers.get(frame));
    const bufferedBytes = orderedFrameBuffers.reduce((sum, buffer) => sum + buffer.length, 0);
    console.log(`[${animationId}] ${scene.id}: rendered ${expectedFrameCount} target frames, ${(bufferedBytes / 1024 / 1024).toFixed(2)} MiB buffered in ${((performance.now() - renderStartedAt) / 1000).toFixed(2)}s`);
    resolutions.push({
      expectedDurationMs: Math.round((expectedFrameCount / outputFps) * 1000),
      expectedFrameCount,
      height: outputHeight,
      orderedFrameBuffers,
      resolutionLabel,
      width: outputWidth,
    });
  }
  return {scene, stableEndFrame, resolutions};
};

const encodeSceneFrames = async ({
  animationId,
  comparison,
  encoderThreads,
  encodingVariants,
  mediaFormat,
  outputFormats,
  outputFps,
  renderedScene,
  sceneFingerprint,
  stagingDirectory,
}) => {
  const resolutions = [];
  for (const renderedResolution of renderedScene.resolutions) {
    const variants = [];
    for (const encodingVariant of encodingVariants) {
      const outputs = [];
      for (const outputFormat of outputFormats) {
        const variantLabel = encodingVariant.quality === undefined
          ? `crf${encodingVariant.crf}`
          : `q${encodingVariant.quality}`;
        const targetFile = comparison
          ? `${renderedScene.scene.id}.${renderedResolution.resolutionLabel}.${variantLabel}.${outputFormat}`
          : `${renderedScene.scene.id}.${outputFormat}`;
        const targetPath = path.join(stagingDirectory, targetFile);
        const outputProfile = outputFormat === 'mp4' ? MEDIA_FORMATS.avif : MEDIA_FORMATS[outputFormat];
        const outputArguments = outputFormat === 'mp4'
          ? ['-tag:v', 'av01', '-movflags', '+faststart', '-f', 'mp4']
          : outputProfile.outputArguments(outputProfile.loopCount);
        const encodeStartedAt = performance.now();
        await runCommandWithInput('ffmpeg', [
          '-hide_banner',
          '-loglevel', 'error',
          '-y',
          '-f', 'image2pipe',
          '-framerate', String(outputFps),
          '-i', 'pipe:0',
          '-an',
          ...outputProfile.encoderArguments({...encodingVariant, encoderThreads}),
          ...outputArguments,
          targetPath,
        ], renderedResolution.orderedFrameBuffers);
        const outputInfo = await inspectOutput({filePath: targetPath, outputFormat, profile: outputProfile});
        const validCodec = outputFormat === 'webp' || outputInfo.codec === 'av1';
        if (
          !outputInfo.validFormat
          || !validCodec
          || outputInfo.width !== renderedResolution.width
          || outputInfo.height !== renderedResolution.height
          || (outputFormat !== 'webp' && outputInfo.pixelFormat !== 'gbrp')
          || outputInfo.frameCount !== renderedResolution.expectedFrameCount
          || !Number.isFinite(outputInfo.durationMs)
          || Math.abs(outputInfo.durationMs - renderedResolution.expectedDurationMs) > 1
          || (outputFormat !== 'mp4' && outputInfo.loopCount !== undefined && outputInfo.loopCount !== outputProfile.loopCount)
        ) {
          throw new Error(`${animationId}: ${targetFile} failed ${outputFormat.toUpperCase()} validation (${JSON.stringify({
            formatName: outputInfo.formatName,
            majorBrand: outputInfo.majorBrand,
            codec: outputInfo.codec,
            width: outputInfo.width,
            height: outputInfo.height,
            pixelFormat: outputInfo.pixelFormat,
            frameCount: outputInfo.frameCount,
            expectedFrameCount: renderedResolution.expectedFrameCount,
            durationMs: outputInfo.durationMs,
            expectedDurationMs: renderedResolution.expectedDurationMs,
            loopCount: outputInfo.loopCount,
          })}).`);
        }
        const fileSize = (await stat(targetPath)).size;
        if (outputProfile.maxFileSize && fileSize > outputProfile.maxFileSize) {
          throw new Error(`${animationId}: ${targetFile} exceeds the ${outputProfile.maxFileSize}-byte ${outputFormat.toUpperCase()} limit (${fileSize} bytes).`);
        }
        outputs.push({
          durationMs: outputInfo.durationMs,
          file: targetFile,
          fileSize,
          format: outputFormat,
          pixelFormat: outputInfo.pixelFormat,
          sha256: await sha256File(targetPath),
        });
        const qualityLabel = encodingVariant.crf === undefined ? `quality ${encodingVariant.quality}` : `CRF ${encodingVariant.crf}`;
        console.log(`[${animationId}] ${renderedScene.scene.id} ${renderedResolution.resolutionLabel} ${qualityLabel} ${outputFormat.toUpperCase()}: ${(fileSize / 1024 / 1024).toFixed(2)} MiB in ${((performance.now() - encodeStartedAt) / 1000).toFixed(2)}s`);
      }
      variants.push({...encodingVariant, outputs});
    }
    resolutions.push({height: renderedResolution.height, variants, width: renderedResolution.width});
  }
  const sceneMetadata = {
    endFrame: renderedScene.stableEndFrame,
    frameCount: renderedScene.resolutions[0].expectedFrameCount,
    id: renderedScene.scene.id,
    number: renderedScene.scene.number,
    startFrame: renderedScene.scene.start,
    title: renderedScene.scene.title,
  };
  const primaryOutput = resolutions[0].variants[0].outputs[0];
  return comparison
    ? {...sceneMetadata, resolutions}
    : {
        ...sceneMetadata,
        ...primaryOutput,
        crf: resolutions[0].variants[0].crf,
        quality: resolutions[0].variants[0].quality,
        sceneFingerprint,
      };
};

const renderAnimation = async ({animationId, crfs, encoderThreads, force, mediaFormat, publishVideo, qualities, runtime, sceneId, widths}) => {
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
  const comparisonRunId = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-');
  const targetDirectory = comparison
    ? path.join(COMPARISON_ROOT, animationId, comparisonRunId)
    : path.join(PROJECT_ROOT, 'public', publishVideo ? 'animation-video' : profile.directory, animationId);
  const stagingDirectory = `${targetDirectory}.staging-${process.pid}`;
  const atomicSceneReplacement = Boolean(sceneId && !comparison);
  const runtimeFingerprint = !comparison && !sceneId
    ? await getRuntimeFingerprint()
    : undefined;
  const sourceFingerprint = !comparison && !sceneId
    ? await createPublicationFingerprint({
        allScenes,
        animationDirectory,
        encodingVariants,
        mediaFormat,
        outputFormats,
        profile,
        publishVideo,
        runtimeFingerprint,
        widths,
      })
    : undefined;
  const bundleFingerprint = !comparison && !sceneId
    ? await createBundleFingerprint(animationDirectory)
    : undefined;
  const expectedPublication = {
    animationId,
    crf: encodingVariants[0].crf,
    extension: publishVideo ? 'mp4' : profile.extension,
    format: publishVideo ? 'av1-mp4' : profile.manifestFormat,
    loopCount: publishVideo ? undefined : profile.loopCount,
    outputFormat: publishVideo ? 'mp4' : mediaFormat,
    pixelFormat: publishVideo || mediaFormat === 'avif' ? 'gbrp' : undefined,
    quality: encodingVariants[0].quality,
    targetFps: publishVideo ? VIDEO_TARGET_FPS : profile.targetFps,
    width: widths[0],
  };

  await removeOrphanedStagingDirectories(targetDirectory);
  if (!force && sourceFingerprint) {
    const reusableManifest = await readReusableManifest({allScenes, expected: expectedPublication, sourceFingerprint, targetDirectory});
    if (reusableManifest) {
      console.log(`[${animationId}] Up to date: skipped bundle, browser rendering, and encoding.`);
      return {...reusableManifest, skipped: true};
    }
  }

  const existingManifest = atomicSceneReplacement
    ? await readExistingManifest(targetDirectory, animationId)
    : await pathExists(path.join(targetDirectory, 'manifest.json'))
      ? JSON.parse(await readFile(path.join(targetDirectory, 'manifest.json'), 'utf8'))
      : undefined;
  const sceneFingerprints = sourceFingerprint
    ? await createSceneFingerprints({
        allScenes,
        animationDirectory,
        encodingVariants,
        mediaFormat,
        outputFormats,
        profile,
        publishVideo,
        runtimeFingerprint,
        sourceFingerprint,
        widths,
      })
    : new Map();
  const reusableScenes = new Map();
  if (!force && sourceFingerprint && existingManifest) {
    const sceneExpected = {...expectedPublication, targetFps: expectedPublication.targetFps === 'source' ? existingManifest.sourceFps : expectedPublication.targetFps};
    for (const scene of allScenes) {
      const published = await readReusableScene({
        expected: sceneExpected,
        manifest: existingManifest,
        scene,
        sceneFingerprint: sceneFingerprints.get(scene.id),
        targetDirectory,
      });
      if (published) reusableScenes.set(scene.id, published);
    }
  }

  await rm(stagingDirectory, {force: true, maxRetries: 12, recursive: true, retryDelay: 150});
  if (atomicSceneReplacement || reusableScenes.size > 0) await cp(targetDirectory, stagingDirectory, {recursive: true});
  else await mkdir(stagingDirectory, {recursive: true});

  try {
    if (sourceFingerprint && reusableScenes.size === allScenes.length) {
      const manifest = {
        ...existingManifest,
        generatedAt: new Date().toISOString(),
        scenes: allScenes.map((scene) => reusableScenes.get(scene.id)),
        sourceFingerprint,
        totalFileSize: [...reusableScenes.values()].reduce((sum, scene) => sum + scene.fileSize, 0),
      };
      await writeFile(path.join(stagingDirectory, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
      await replaceDirectory(stagingDirectory, targetDirectory);
      console.log(`[${animationId}] Scene cache hit: skipped bundle, browser rendering, and encoding.`);
      return {...manifest, skipped: true};
    }

    await ensureFfmpeg();
    const browserExecutable = runtimeFingerprint?.browserExecutable ?? await getBrowserExecutable();
    if (browserExecutable && !runtime.browserPromise) console.log(`[runtime] Using browser: ${browserExecutable}`);
    console.log(`\n[${animationId}] Bundling composition...`);
    const serveUrl = await getBundledServeUrl({
      animationDirectory,
      animationId,
      bundleFingerprint: bundleFingerprint ?? await createBundleFingerprint(animationDirectory),
      force,
      runtime,
    });
    const browser = await getSharedBrowser({browserExecutable, runtime});
    const compositions = await getCompositions(serveUrl, {puppeteerInstance: browser});
    const composition = selectDeckComposition(animationId, compositions);
    if (!composition) throw new Error(`${animationId}: no composition found.`);

    const targetFps = publishVideo
      ? VIDEO_TARGET_FPS
      : profile.targetFps === 'source' ? composition.fps : profile.targetFps;
    const everyNthFrame = Math.max(1, Math.round(composition.fps / targetFps));
    const outputFps = composition.fps / everyNthFrame;
    const outputWidth = widths[0];
    const outputHeight = Math.round(composition.height * outputWidth / composition.width);
    if (atomicSceneReplacement) {
      await assertAtomicSceneCompatibility({
        allScenes,
        animationId,
        composition,
        crf: encodingVariants[0].crf,
        everyNthFrame,
        format: publishVideo ? 'av1-mp4' : profile.manifestFormat,
        loopCount: publishVideo ? undefined : profile.loopCount,
        manifest: existingManifest,
        outputFormat: publishVideo ? 'mp4' : mediaFormat,
        outputFps,
        outputHeight,
        outputWidth,
        profile: publishVideo ? MEDIA_FORMATS.avif : profile,
        quality: encodingVariants[0].quality,
        sceneId,
        targetDirectory,
      });
    }
    const scenesToRender = scenes.filter((scene) => !reusableScenes.has(scene.id));
    const publishedScenes = new Map(reusableScenes);
    let renderPromise = scenesToRender.length > 0
      ? renderSceneFrames({animationId, browser, composition, everyNthFrame, outputFps, scene: scenesToRender[0], sceneCount: scenes.length, serveUrl, widths})
      : undefined;
    let encodingPromise;
    try {
      for (let index = 0; index < scenesToRender.length; index += 1) {
        const renderedScene = await renderPromise;
        const nextRenderPromise = index + 1 < scenesToRender.length
          ? renderSceneFrames({animationId, browser, composition, everyNthFrame, outputFps, scene: scenesToRender[index + 1], sceneCount: scenes.length, serveUrl, widths})
          : undefined;
        if (encodingPromise) {
          const published = await encodingPromise;
          publishedScenes.set(published.id, published);
        }
        encodingPromise = encodeSceneFrames({
          animationId,
          comparison,
          encoderThreads,
          encodingVariants,
          mediaFormat,
          outputFormats,
          outputFps,
          renderedScene,
          sceneFingerprint: sceneFingerprints.get(renderedScene.scene.id),
          stagingDirectory,
        });
        renderPromise = nextRenderPromise;
      }
      if (encodingPromise) {
        const published = await encodingPromise;
        publishedScenes.set(published.id, published);
      }
    } catch (error) {
      await Promise.allSettled([renderPromise, encodingPromise].filter(Boolean));
      throw error;
    }

    const mergedScenes = atomicSceneReplacement
      ? allScenes.map((scene) => publishedScenes.get(scene.id)
        ?? existingManifest.scenes.find((published) => published.id === scene.id))
      : allScenes.map((scene) => publishedScenes.get(scene.id));
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
      scenes: mergedScenes,
      size: comparison ? undefined : {
        height: Math.round(composition.height * widths[0] / composition.width),
        width: widths[0],
      },
      sizes: comparison ? widths.map((width) => ({
        height: Math.round(composition.height * width / composition.width),
        width,
      })) : undefined,
      sourceFps: composition.fps,
      sourceFingerprint,
      targetFps: outputFps,
      totalFileSize: mergedScenes.reduce((sum, scene) => sum + (comparison
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
  }
};

const main = async () => {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    console.log(usage.trim());
    return;
  }

  const discoveredIds = await discoverAnimationIds();
  const animationIds = options.animationIds.length === 0 ? discoveredIds : [...new Set(options.animationIds)];
  const invalidIds = animationIds.filter((animationId) => !ANIMATION_ID_PATTERN.test(animationId));
  if (invalidIds.length > 0) throw new Error(`Invalid animation ID: ${invalidIds.join(', ')}`);
  const missingIds = animationIds.filter((animationId) => !discoveredIds.includes(animationId));
  if (missingIds.length > 0) throw new Error(`Animation not found or incomplete: ${missingIds.join(', ')}`);

  await mkdir(options.publishVideo ? PUBLIC_VIDEO_ROOT : options.crfs ? COMPARISON_ROOT : path.join(PROJECT_ROOT, 'public', MEDIA_FORMATS[options.mediaFormat].directory), {recursive: true});
  const manifests = new Array(animationIds.length);
  let nextAnimationIndex = 0;
  const workerCount = Math.min(options.jobs, animationIds.length);
  const encoderThreads = workerCount === 1 ? SINGLE_WORKER_ENCODER_THREADS : ENCODER_THREADS;
  const runtime = createRenderRuntime();
  console.log(`Running ${animationIds.length} animation(s) with ${workerCount} concurrent job(s), ${encoderThreads} encoder thread(s) per job.`);

  const renderNext = async () => {
    while (nextAnimationIndex < animationIds.length) {
      const animationIndex = nextAnimationIndex;
      nextAnimationIndex += 1;
      manifests[animationIndex] = await renderAnimation({
        animationId: animationIds[animationIndex],
        crfs: options.crfs,
        encoderThreads,
        force: options.force,
        mediaFormat: options.mediaFormat,
        publishVideo: options.publishVideo,
        qualities: options.qualities,
        runtime,
        sceneId: options.sceneId,
        widths: options.widths,
      });
    }
  };

  try {
    const workerResults = await Promise.allSettled(
      Array.from({length: workerCount}, () => renderNext()),
    );
    const failedWorker = workerResults.find((result) => result.status === 'rejected');
    if (failedWorker?.status === 'rejected') throw failedWorker.reason;
    const totalSize = manifests.reduce((sum, manifest) => sum + manifest.totalFileSize, 0);
    const skippedCount = manifests.filter((manifest) => manifest.skipped).length;
    console.log(`\nProcessed ${manifests.length} animations (${skippedCount} up to date), ${manifests.reduce((sum, manifest) => sum + manifest.scenes.length, 0)} scenes, ${(totalSize / 1024 / 1024).toFixed(2)} MiB.`);
  } finally {
    await closeRenderRuntime(runtime);
  }
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
