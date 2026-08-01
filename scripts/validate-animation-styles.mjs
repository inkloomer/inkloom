import {readFile, readdir, stat} from 'node:fs/promises';
import path from 'node:path';

const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');
const BASELINE_PATH = path.join(import.meta.dirname, 'animation-style-baseline.json');
const REQUIRED_FIELDS = ['directionId', 'family', 'palette', 'typography', 'composition', 'surface', 'motion', 'transition'];

const isFile = async (filePath) => {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
};

const animationDirectories = [];
const discoverAnimations = async (directory, depth = 0) => {
  for (const entry of await readdir(directory, {withFileTypes: true})) {
    if (!entry.isDirectory() || entry.name === 'shared') continue;
    const candidate = path.join(directory, entry.name);
    if (await isFile(path.join(candidate, 'remotion', 'storyboard.ts'))) {
      animationDirectories.push({id: entry.name, directory: candidate});
      continue;
    }
    if (depth < 4) await discoverAnimations(candidate, depth + 1);
  }
};

const normalize = (value) => value.trim().toLocaleLowerCase('en-US').replaceAll(/\s+/g, ' ');

const main = async () => {
  const baseline = JSON.parse(await readFile(BASELINE_PATH, 'utf8'));
  const legacyIds = new Set(baseline.legacyAnimationIds ?? []);
  const allowedFamilyReuse = baseline.allowedFamilyReuse ?? {};
  const errors = [];
  const warnings = [];
  const fingerprints = new Map();
  const families = new Map();

  await discoverAnimations(ANIMATIONS_ROOT);

  for (const animation of animationDirectories.sort((left, right) => left.id.localeCompare(right.id))) {
    const manifestPath = path.join(animation.directory, 'visual-direction.json');
    if (!(await isFile(manifestPath))) {
      if (legacyIds.has(animation.id)) {
        warnings.push(`${animation.id}: legacy node has no visual-direction.json`);
      } else {
        errors.push(`${animation.id}: new animation node must define visual-direction.json`);
      }
      continue;
    }

    let direction;
    try {
      direction = JSON.parse(await readFile(manifestPath, 'utf8'));
    } catch (error) {
      errors.push(`${animation.id}: invalid visual-direction.json (${error.message})`);
      continue;
    }

    for (const field of REQUIRED_FIELDS) {
      if (typeof direction[field] !== 'string' || direction[field].trim().length < 3) {
        errors.push(`${animation.id}: visual-direction.json requires a descriptive "${field}" string`);
      }
    }
    if (errors.some((entry) => entry.startsWith(`${animation.id}:`))) continue;

    const fingerprint = REQUIRED_FIELDS.slice(1).map((field) => normalize(direction[field])).join('|');
    const previousFingerprint = fingerprints.get(fingerprint);
    if (previousFingerprint) {
      errors.push(`${animation.id}: duplicates the complete visual fingerprint of ${previousFingerprint}`);
    } else {
      fingerprints.set(fingerprint, animation.id);
    }

    const family = normalize(direction.family);
    const familyNodes = families.get(family) ?? [];
    familyNodes.push(animation.id);
    families.set(family, familyNodes);
  }

  for (const [family, nodes] of families) {
    if (nodes.length > 1) {
      const allowedNodes = new Set(allowedFamilyReuse[family] ?? []);
      const approved = nodes.every((node) => allowedNodes.has(node)) && allowedNodes.size === nodes.length;
      if (approved) {
        warnings.push(`approved style family "${family}" is reused by ${nodes.join(', ')}; fingerprints remain independently audited`);
      } else {
        errors.push(`style family "${family}" is reused by ${nodes.join(', ')} without an explicit baseline approval`);
      }
    }
  }

  console.log(`Animation style audit: ${animationDirectories.length} nodes, ${fingerprints.size} declared directions.`);
  for (const warning of warnings) console.warn(`WARN ${warning}`);
  if (errors.length > 0) {
    for (const error of errors) console.error(`ERROR ${error}`);
    process.exitCode = 1;
  }
};

await main();
