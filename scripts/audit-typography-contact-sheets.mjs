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
`;

const parseArguments = (arguments_) => {
  const options = {chapter: undefined, inputRoot: DEFAULT_INPUT_ROOT, outputRoot: DEFAULT_OUTPUT_ROOT, subject: undefined};
  for (let index = 0; index < arguments_.length; index += 1) {
    const argument = arguments_[index];
    if (argument === '--') continue;
    if (argument === '--help') return {help: true};
    if (argument === '--input' || argument === '--output' || argument === '--subject' || argument === '--chapter') {
      const value = arguments_[index + 1];
      if (!value) throw new Error(`${argument} requires a value.`);
      if (argument === '--input') options.inputRoot = path.resolve(PROJECT_ROOT, value);
      if (argument === '--output') options.outputRoot = path.resolve(PROJECT_ROOT, value);
      if (argument === '--subject') options.subject = value;
      if (argument === '--chapter') options.chapter = value;
      index += 1;
      continue;
    }
    throw new Error(`Unknown option: ${argument}`);
  }
  return {help: false, ...options};
};

const fileExists = async (filePath) => stat(filePath).then((entry) => entry.isFile(), () => false);

const latestContactSheet = async (inputRoot, animationId) => {
  const animationDirectory = path.join(inputRoot, animationId);
  let entries;
  try {
    entries = await readdir(animationDirectory, {withFileTypes: true});
  } catch {
    return undefined;
  }
  const runs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort().reverse();
  for (const run of runs) {
    const candidate = path.join(animationDirectory, run, 'contact-sheet.png');
    if (await fileExists(candidate)) return candidate;
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
  const composites = await Promise.all(animations.map(async ({contactSheetPath}, index) => ({
    input: await sharp(contactSheetPath)
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

  const animations = (await knownAnimations()).filter((animation) =>
    (!options.subject || animation.subject === options.subject) &&
    (!options.chapter || animation.chapter === options.chapter),
  );
  if (animations.length === 0) throw new Error('No tracked animation metadata matches the requested scope.');

  const resolved = await Promise.all(animations.map(async (animation) => ({
    ...animation,
    contactSheetPath: await latestContactSheet(options.inputRoot, animation.animationId),
  })));
  const missing = resolved.filter((animation) => !animation.contactSheetPath).map((animation) => animation.animationId);
  if (missing.length > 0) throw new Error(`Missing current page-capture contact sheets: ${missing.join(', ')}`);

  const chapterGroups = new Map();
  for (const animation of resolved) {
    const key = `${animation.subject}/${animation.chapter}`;
    chapterGroups.set(key, [...(chapterGroups.get(key) ?? []), animation]);
  }

  const report = [];
  for (const [key, group] of chapterGroups) {
    const outputPath = path.join(options.outputRoot, key, 'contact-sheet.png');
    await createChapterContactSheet({animations: group, outputPath});
    report.push({animations: group.map(({animationId, contactSheetPath}) => ({animationId, contactSheetPath})), outputPath, scope: key});
    console.log(`[typography] ${key}: ${group.length} animation contact sheets -> ${outputPath}`);
  }
  await mkdir(options.outputRoot, {recursive: true});
  await writeFile(path.join(options.outputRoot, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
