// One-shot codemod: convert static composition imports in the demo registries
// into per-entry dynamic imports via lazyDemo(). Storyboard imports (pure
// data) stay static.
import {readFileSync, writeFileSync} from 'node:fs';

const files = [
  'src/components/demo/demo-registry.ts',
  'src/components/demo/administrative-law-demo-registry.ts',
  'src/components/demo/commercial-law-demo-registry.ts',
];

const importRe = /import\s*\{([^}]+)\}\s*from\s*'([^']+)';\n/g;

for (const file of files) {
  let source = readFileSync(file, 'utf8');
  const nameToPath = new Map();

  for (const match of source.matchAll(importRe)) {
    const path = match[2];
    if (!path.includes('/animations/') || path.includes('/storyboard') || path.includes('/shared/')) continue;
    for (const raw of match[1].split(',')) {
      const name = raw.trim().replace(/^type\s+/, '');
      if (name) nameToPath.set(name, path);
    }
  }

  // Remove the now-dynamic composition imports.
  source = source.replace(importRe, (full, names, path) => {
    if (!path.includes('/animations/') || path.includes('/storyboard') || path.includes('/shared/')) return full;
    return '';
  });

  // component: Name -> lazyDemo(() => import(path).then(m => ({default: m.Name})))
  source = source.replace(/component:\s*(\w+),/g, (full, name) => {
    const path = nameToPath.get(name);
    if (!path) return full;
    return `component: lazyDemo(() => import('${path}').then((m) => ({default: m.${name}}))),`;
  });

  // component: withAnimationTypography(Name, cfg) -> lazy inside
  source = source.replace(
    /component:\s*withAnimationTypography\((\w+), (getAnimationTypographyConfiguration\('[^']+'\))\),/g,
    (full, name, cfg) => {
      const path = nameToPath.get(name);
      if (!path) return full;
      return `component: lazyDemo(() => import('${path}').then((m) => ({default: withAnimationTypography(m.${name}, ${cfg})}))),`;
    },
  );

  // Import the helper.
  const helperImport = "import {lazyDemo} from './lazy-demo';\n";
  if (file.endsWith('demo-registry.ts')) {
    source = source.replace("import type {ComponentType} from 'react';", `${helperImport}import type {ComponentType} from 'react';`);
  } else {
    source = source.replace("import type {DemoDefinition} from './demo-registry';", `import type {DemoDefinition} from './demo-registry';\n${helperImport}`);
  }

  writeFileSync(file, source);
  console.log(`${file}: ${nameToPath.size} composition imports made lazy`);
}
