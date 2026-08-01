import {execFile} from 'node:child_process';
import {mkdir, readdir, stat, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {promisify} from 'node:util';
import sharp from 'sharp';

const execFileAsync = promisify(execFile);
const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const DEFAULT_INPUT_ROOT = path.join(PROJECT_ROOT, '.artifacts', 'animation-pages');
const DEFAULT_OUTPUT_ROOT = path.join(PROJECT_ROOT, '.artifacts', 'typography-audit');

const usage = `
Create chapter-level typography contact sheets from animation page captures.

Usage:
  pnpm animation:typography:contacts
  pnpm animation:typography:contacts -- --input .artifacts/typography-audit/civil-01
  pnpm animation:typography:contacts -- --subject civil-procedure --chapter 10
  pnpm animation:typography:contacts -- --published --subject civil-procedure --chapters 01+02+03+04+05+06+07+08 --aggregate 01-08
`;

const parseArguments = (arguments_) => {
  const options = {aggregate: undefined, chapter: undefined, chapters: undefined, inputRoot: DEFAULT_INPUT_ROOT, outputRoot: DEFAULT_OUTPUT_ROOT, published: false, subject: undefined};
  for (let index = 0; index < arguments_.length; index += 1) {
    const argument = arguments_[index];
    if (argument === '--') continue;
    if (argument === '--help') return {help: true};
    if (argument === '--published') {
      options.published = true;
      continue;
    }
    if (argument === '--input' || argument === '--output' || argument === '--subject' || argument === '--chapter' || argument === '--chapters' || argument === '--aggregate') {
      const value = arguments_[index + 1];
      if (!value) throw new Error(`${argument} requires a value.`);
      if (argument === '--input') options.inputRoot = path.resolve(PROJECT_ROOT, value);
      if (argument === '--output') options.outputRoot = path.resolve(PROJECT_ROOT, value);
      if (argument === '--subject') options.subject = value;
      if (argument === '--chapter') options.chapter = value;
      if (argument === '--chapters') options.chapters = value.split(/[,+]/).map((chapter) => chapter.trim()).filter(Boolean);
      if (argument === '--aggregate') options.aggregate = value;
      index += 1;
      continue;
    }
    throw new Error(`Unknown option: ${argument}`);
  }
  return {help: false, ...options};
};

const fileExists = async (filePath) => stat(filePath).then((entry) => entry.isFile(), () => false);

const latestCapture = async (inputRoot, animationId) => {
  const animationDirectory = path.join(inputRoot, animationId);
  let entries;
  try {
    entries = await readdir(animationDirectory, {withFileTypes: true});
  } catch {
    return undefined;
  }
  const runs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort().reverse();
  for (const run of runs) {
    const runDirectory = path.join(animationDirectory, run);
    const contactSheetPath = path.join(runDirectory, 'contact-sheet.png');
    if (!(await fileExists(contactSheetPath))) continue;
    const pages = (await readdir(runDirectory))
      .filter((entry) => /^page-\d+-.*\.png$/.test(entry))
      .sort();
    if (pages.length > 0) return {contactSheetPath, previewPath: path.join(runDirectory, pages[0])};
  }
  return undefined;
};

const knownAnimations = async () => {
  const {stdout} = await execFileAsync('git', ['ls-files'], {cwd: PROJECT_ROOT});
  return stdout
    .split(/\r?\n/)
    .map((file) => {
      const subjectMatch = file.match(/^src\/animations\/([^/]+)\/([^/]+)\/([^/]+)\/animation\.meta\.ts$/);
      if (subjectMatch) return {animationId: subjectMatch[3], chapter: subjectMatch[2], subject: subjectMatch[1]};
      const demoMatch = file.match(/^src\/animations\/demo\/([^/]+)\/animation\.meta\.ts$/);
      return demoMatch ? {animationId: demoMatch[1], chapter: 'styles', subject: 'demo'} : undefined;
    })
    .filter(Boolean)
    .sort((left, right) => left.subject.localeCompare(right.subject) || left.chapter.localeCompare(right.chapter) || left.animationId.localeCompare(right.animationId));
};

const createChapterContactSheet = async ({animations, outputPath}) => {
  const gap = 16;
  const tileWidth = 420;
  const tileHeight = 236;
  const columns = Math.min(3, animations.length);
  const rows = Math.ceil(animations.length / columns);
  const composites = await Promise.all(animations.map(async ({previewPath}, index) => ({
    input: await sharp(previewPath)
      .resize({width: tileWidth, height: tileHeight, fit: 'contain', background: '#0f1419'})
      .png()
      .toBuffer(),
    left: gap + (index % columns) * (tileWidth + gap),
    top: gap + Math.floor(index / columns) * (tileHeight + gap),
  })));
  await mkdir(path.dirname(outputPath), {recursive: true});
  await sharp({
    create: {
      width: columns * tileWidth + (columns + 1) * gap,
      height: rows * tileHeight + (rows + 1) * gap,
      channels: 4,
      background: '#0f1419',
    },
  }).composite(composites).png().toFile(outputPath);
};

const main = async () => {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    console.log(usage.trim());
    return;
  }

  let animations = (await knownAnimations()).filter((animation) =>
    (!options.subject || animation.subject === options.subject) &&
    (!options.chapter || animation.chapter === options.chapter) &&
    (!options.chapters || options.chapters.includes(animation.chapter)),
  );
  if (options.published) {
    const publicationState = await Promise.all(animations.map(async (animation) => ({
      animation,
      published: await fileExists(path.join(PROJECT_ROOT, 'public', 'animation-avif', animation.animationId, 'manifest.json')),
    })));
    animations = publicationState.filter((item) => item.published).map((item) => item.animation);
  }
  if (animations.length === 0) throw new Error('No tracked animation metadata matches the requested scope.');

  const resolved = await Promise.all(animations.map(async (animation) => ({
    ...animation,
    capture: await latestCapture(options.inputRoot, animation.animationId),
  })));
  const missing = resolved.filter((animation) => !animation.capture).map((animation) => animation.animationId);
  if (missing.length > 0) throw new Error(`Missing current page-capture contact sheets: ${missing.join(', ')}`);
  const captured = resolved.map(({capture, ...animation}) => ({...animation, ...capture}));

  const chapterGroups = new Map();
  for (const animation of captured) {
    const key = options.aggregate
      ? `${options.subject ?? 'all'}/${options.aggregate}`
      : `${animation.subject}/${animation.chapter}`;
    chapterGroups.set(key, [...(chapterGroups.get(key) ?? []), animation]);
  }

  const report = [];
  for (const [key, group] of chapterGroups) {
    const outputPath = path.join(options.outputRoot, key, 'contact-sheet.png');
    await createChapterContactSheet({animations: group, outputPath});
    report.push({animations: group.map(({animationId, contactSheetPath, previewPath}) => ({animationId, contactSheetPath, previewPath})), outputPath, scope: key});
    console.log(`[typography] ${key}: ${group.length} animation contact sheets -> ${outputPath}`);
  }
  await mkdir(options.outputRoot, {recursive: true});
  await writeFile(path.join(options.outputRoot, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
