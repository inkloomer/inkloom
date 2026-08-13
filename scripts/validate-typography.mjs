import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {access, readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import {promisify} from 'node:util';

const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');
const COMPONENTS_ROOT = path.join(PROJECT_ROOT, 'src', 'components');
const REGISTRY_PATH = path.join(PROJECT_ROOT, 'src', 'typography', 'font-registry.ts');
const ANIMATION_METADATA_REGISTRY_PATH = path.join(PROJECT_ROOT, 'src', 'typography', 'animation-registry.ts');
const ALLOWED_ANIMATION_ROLES = new Set(['title', 'body', 'label', 'meta', 'footer', 'mono']);
const ALLOWED_SITE_ROLES = new Set(['body', 'heading', 'ui', 'mono']);
const ALLOWED_FONT_IDS = new Set(['wenkai', 'wenkai-mono']);
const ALLOWED_ANIMATION_PRESET_IDS = new Set(['wenkai']);
const execFileAsync = promisify(execFile);

const collectFiles = async (directory, predicate) => {
  const entries = await readdir(directory, {withFileTypes: true});
  const nested = await Promise.all(entries.map(async (entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(filePath, predicate);
    return predicate(filePath) ? [filePath] : [];
  }));
  return nested.flat();
};

const exists = async (filePath) => access(filePath).then(() => true, () => false);
const sha256 = async (filePath) => createHash('sha256').update(await readFile(filePath)).digest('hex');
const relative = (filePath) => path.relative(PROJECT_ROOT, filePath).replaceAll(path.sep, '/');

const validateRoleReferences = ({errors, filePath, source, prefix, allowedRoles}) => {
  for (const match of source.matchAll(new RegExp(`--inkloom-${prefix}-([a-z-]+)`, 'g'))) {
    const role = match[1].endsWith('-font-synthesis')
      ? match[1].slice(0, -'-font-synthesis'.length)
      : match[1];
    if (!allowedRoles.has(role)) errors.push(`${relative(filePath)}: unknown ${prefix} role "${match[1]}".`);
  }
};

const registeredTextValue = ({registrySource, property, fontId}) => {
  const fontBlock = registrySource.match(new RegExp(`${fontId === 'wenkai-mono' ? "'wenkai-mono'" : fontId}: \\{([\\s\\S]*?)\\n  \\},`, 'm'))?.[1];
  return fontBlock?.match(new RegExp(`${property}: '([^']+)'`))?.[1];
};

const main = async () => {
  const errors = [];
  const {stdout} = await execFileAsync('git', ['ls-files'], {cwd: PROJECT_ROOT});
  const trackedFiles = new Set(stdout.split(/\r?\n/).filter(Boolean));
  const tracked = (filePath) => trackedFiles.has(relative(filePath));
  const animationFiles = (await collectFiles(ANIMATIONS_ROOT, (filePath) => /\.(?:ts|tsx|css)$/.test(filePath))).filter(tracked);
  const componentFiles = (await collectFiles(COMPONENTS_ROOT, (filePath) => /\.(?:astro|ts|tsx|css)$/.test(filePath))).filter(tracked);
  const metadataFiles = animationFiles.filter((filePath) => filePath.endsWith('animation.meta.ts'));
  const registrySource = await readFile(REGISTRY_PATH, 'utf8');
  const animationMetadataRegistryFiles = (await collectFiles(path.join(PROJECT_ROOT, 'src', 'typography'), (filePath) => filePath.endsWith('-registry.ts')));
  const animationMetadataRegistrySource = (await Promise.all(animationMetadataRegistryFiles.map((filePath) => readFile(filePath, 'utf8')))).join('\n');

  for (const filePath of animationFiles) {
    const source = await readFile(filePath, 'utf8');
    validateRoleReferences({errors, filePath, source, prefix: 'animation', allowedRoles: ALLOWED_ANIMATION_ROLES});

    if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      for (const match of source.matchAll(/fontFamily\s*:\s*([^,}\n]+)/g)) {
        if (!match[1].includes('var(--inkloom-animation-')) {
          errors.push(`${relative(filePath)}: raw fontFamily declaration is forbidden.`);
          break;
        }
      }
      if (/font-\[[^\]]+\]/.test(source)) errors.push(`${relative(filePath)}: Tailwind arbitrary font utility is forbidden.`);
    }

    if (filePath.endsWith('animation.meta.ts')) {
      if (!/export const typography = defineAnimationTypography\(/.test(source)) {
        errors.push(`${relative(filePath)}: missing node-local typography export.`);
      }
      const registryImport = `../animations/${relative(filePath).slice('src/animations/'.length).replace(/\.ts$/, '')}`;
      if (!animationMetadataRegistrySource.includes(`from '${registryImport}'`)) {
        errors.push(`${relative(filePath)}: missing from the animation typography registry.`);
      }
      for (const match of source.matchAll(/(preset|title|body|label|meta|footer|mono)\s*:\s*['"]([a-z-]+)['"]/g)) {
        const [_, property, value] = match;
        if (property === 'preset' && !ALLOWED_ANIMATION_PRESET_IDS.has(value)) {
          errors.push(`${relative(filePath)}: unknown typography preset "${value}".`);
        } else if (property !== 'preset' && !ALLOWED_FONT_IDS.has(value)) {
          errors.push(`${relative(filePath)}: unknown typography font "${value}".`);
        }
      }
    }
  }

  for (const filePath of animationFiles.filter((candidate) => relative(candidate).endsWith('/remotion/Root.tsx'))) {
    const source = await readFile(filePath, 'utf8');
    const animationId = path.basename(path.dirname(path.dirname(filePath)));
    if (source.includes('withAnimationTypography(') && !source.includes(`getAnimationTypographyConfiguration('${animationId}')`)) {
      errors.push(`${relative(filePath)}: Root does not resolve its node typography metadata.`);
    }
  }

  for (const filePath of componentFiles) {
    const source = await readFile(filePath, 'utf8');
    validateRoleReferences({errors, filePath, source, prefix: 'site', allowedRoles: ALLOWED_SITE_ROLES});
    if (filePath.endsWith('.css') || filePath.endsWith('.astro')) {
      for (const match of source.matchAll(/font-family\s*:\s*([^;]+)/g)) {
        if (!match[1].includes('var(--font-site-')) errors.push(`${relative(filePath)}: raw site font-family declaration is forbidden.`);
      }
      for (const match of source.matchAll(/\bfont\s*:\s*([^;]+)/g)) {
        if (!match[1].includes('inherit') && !match[1].includes('var(--font-site-')) {
          errors.push(`${relative(filePath)}: raw site font shorthand is forbidden.`);
        }
      }
    }
    if (/font-\[[^\]]+\]/.test(source)) errors.push(`${relative(filePath)}: Tailwind arbitrary font utility is forbidden.`);
  }

  const screenPath = registeredTextValue({registrySource, property: 'path', fontId: 'wenkai'});
  const expectedScreenHash = registeredTextValue({registrySource, property: 'sha256', fontId: 'wenkai'});
  const monoPackage = registeredTextValue({registrySource, property: 'packageName', fontId: 'wenkai-mono'});
  const monoVersion = registeredTextValue({registrySource, property: 'version', fontId: 'wenkai-mono'});
  const monoIntegrity = registeredTextValue({registrySource, property: 'integrity', fontId: 'wenkai-mono'});
  if (!screenPath || !expectedScreenHash || !monoPackage || !monoVersion || !monoIntegrity) {
    errors.push('The font registry is missing a required WenKai source definition.');
  }

  const screenFont = path.join(PROJECT_ROOT, 'public', screenPath ?? 'missing-font');
  if (!(await exists(screenFont))) {
    errors.push('LXGW WenKai Screen source is missing.');
  } else if (await sha256(screenFont) !== expectedScreenHash) {
    errors.push('LXGW WenKai Screen source hash does not match the registry.');
  }

  const monoStylesheet = path.join(PROJECT_ROOT, 'node_modules', monoPackage ?? 'missing-font-package', 'fonts', 'style.css');
  if (!(await exists(monoStylesheet))) errors.push('LXGW WenKai Mono GB Screen package stylesheet is missing.');

  const lockfile = await readFile(path.join(PROJECT_ROOT, 'pnpm-lock.yaml'), 'utf8');
  if (!lockfile.includes(`${monoPackage}@${monoVersion}`) || !lockfile.includes(monoIntegrity ?? 'missing-integrity')) {
    errors.push('LXGW WenKai Mono GB Screen package version or integrity is not locked.');
  }

  if (errors.length > 0) throw new Error(`[typography] ${errors.join('\n[typography] ')}`);
  console.log(`Typography audit passed for ${animationFiles.length} animation files, ${metadataFiles.length} animation nodes, and ${componentFiles.length} site component files.`);
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
