// 验收脚本：商经知推背速记动画战役（unlazy 台账专用）
// 用法: node .unlazy/shangjingzhi/verify.mjs <mode>
// mode: structure01-12 | published01-12 | carriers01-12 | newshangfa | newjingzhi | capture-evidence

import {readFile, readdir, stat} from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const ANIM = path.join(ROOT, 'src', 'animations', 'commercial-law');
const AVIF = path.join(ROOT, 'public', 'animation-avif');
const DOCS = path.join(ROOT, 'src', 'content', 'docs', 'objective', 'commercial-law');

const IDS_01_12 = {
  '01': ['company-capacity', 'company-classification', 'company-personality'],
  '02': ['company-incorporation', 'promoter', 'shareholder-contribution'],
  '03': ['nominal-shareholder', 'shareholder-qualification'],
  '04': ['dividend-right', 'information-right'],
  '05': ['director-duties', 'shareholder-representative-action'],
  '06': ['corporate-organs', 'resolution-validity'],
  '07': ['company-restructuring', 'llc-equity-transfer', 'share-issuance-transfer'],
  '08': ['company-dissolution', 'company-liquidation'],
  '09': ['bankruptcy-administrator', 'bankruptcy-application', 'bankruptcy-costs', 'bankruptcy-grounds'],
  '10': ['claim-filing', 'creditors-meeting'],
  '11': ['bankruptcy-revocation-right', 'debtor-property-scope', 'reclaim-right', 'recovery-right'],
  '12': ['bankruptcy-liquidation', 'bankruptcy-reorganization'],
};
const ALL_IDS = Object.entries(IDS_01_12).flatMap(([ch, ids]) => ids.map((id) => ({ch, id})));

const isFile = async (p) => { try { return (await stat(p)).isFile(); } catch { return false; } };

const sceneIdsFromStoryboard = async (id) => {
  const dir = await findNodeDir(id);
  if (!dir) return null;
  const src = await readFile(path.join(dir, 'remotion', 'storyboard.ts'), 'utf8');
  return [...src.matchAll(/^  '([a-z0-9-]+)':\s*\{start/gm)].map((m) => m[1]);
};

const findNodeDir = async (id) => {
  for (const ch of Object.keys(IDS_01_12)) {
    const d = path.join(ANIM, ch, id);
    if (await isFile(path.join(d, 'remotion', 'storyboard.ts'))) return d;
  }
  return null;
};

const checkPublished = async (entries) => {
  const problems = [];
  for (const {id} of entries) {
    const manifestPath = path.join(AVIF, id, 'manifest.json');
    if (!(await isFile(manifestPath))) { problems.push(`${id}: 缺 manifest.json`); continue; }
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
    const files = manifest.files ?? manifest.pages ?? manifest.scenes ?? [];
    const fileList = Array.isArray(files) ? files : Object.keys(files);
    const scenes = await sceneIdsFromStoryboard(id);
    if (!scenes) { problems.push(`${id}: 找不到节点 storyboard`); continue; }
    for (const scene of scenes) {
      const hit = fileList.some((f) => {
        const name = typeof f === 'string' ? f : (f.file ?? f.scene ?? JSON.stringify(f));
        return String(name).includes(scene);
      });
      if (!hit) problems.push(`${id}: manifest 缺场景 ${scene}`);
      if (!(await isFile(path.join(AVIF, id, `${scene}.avif`)))) problems.push(`${id}: 缺 ${scene}.avif`);
    }
  }
  return problems;
};

const readRegistries = async () => {
  const files = ['animation-registry.ts', 'commercial-law-animation-registry.ts'];
  const texts = await Promise.all(files.map((f) => readFile(path.join(ROOT, 'src', 'typography', f), 'utf8').catch(() => '')));
  return texts.join('\n');
};

const checkCarriers = async (entries) => {
  const registry = await readRegistries();
  const problems = [];
  for (const {ch, id} of entries) {
    if (!(await isFile(path.join(DOCS, ch, `${id}.mdx`)))) problems.push(`${id}: 缺 MDX 载体 ${ch}`);
    if (!registry.includes(`'${id}'`)) problems.push(`${id}: typography 注册表缺条目`);
  }
  return problems;
};

const checkStructure = async () => {
  const {execFile} = await import('node:child_process');
  const {promisify} = await import('node:util');
  const run = promisify(execFile);
  let output = '';
  try {
    const r = await run('node', ['scripts/validate-animation-structure.mjs'], {cwd: ROOT, timeout: 180000});
    output = r.stdout + r.stderr;
  } catch (error) {
    output = (error.stdout ?? '') + (error.stderr ?? '');
  }
  const ids = new Set(ALL_IDS.map((e) => e.id));
  const bad = output.split('\n').filter((line) => {
    const m = line.match(/^ERROR ([a-z0-9-]+)\//);
    return m && ids.has(m[1]);
  });
  return bad;
};

// 门禁语义：每章至少一个「齐备」节点（storyboard + MDX 载体 + 注册表条目）。
// 章内其他 WIP 节点（如并发会话在建的 copyright-object）不阻断本门禁。
const checkNewNodes = async (subjectPath, expected) => {
  const problems = [];
  const registry = await readRegistries();
  const docsBase = path.join(ROOT, 'src', 'content', 'docs', 'objective', subjectPath.replace('src/animations/', ''));
  for (const [ch] of Object.entries(expected)) {
    const dir = path.join(ROOT, subjectPath, ch);
    let entries = [];
    try { entries = (await readdir(dir, {withFileTypes: true})).filter((e) => e.isDirectory()); } catch { }
    const nodes = [];
    for (const e of entries) {
      if (await isFile(path.join(dir, e.name, 'remotion', 'storyboard.ts'))) nodes.push(e.name);
    }
    const complete = [];
    const diag = [];
    for (const id of nodes) {
      const hasMdx = await isFile(path.join(docsBase, ch, `${id}.mdx`));
      const hasRegistry = registry.includes(`'${id}'`);
      if (hasMdx && hasRegistry) complete.push(id);
      else diag.push(`${id}(mdx:${hasMdx ? 'ok' : '缺'},reg:${hasRegistry ? 'ok' : '缺'})`);
    }
    if (complete.length < 1) {
      const detail = nodes.length < 1 ? '无动画节点' : diag.join(', ');
      problems.push(`${subjectPath}/${ch}: 无齐备节点 — ${detail}`);
    }
  }
  return problems;
};

const checkCaptureEvidence = async (entries) => {
  const problems = [];
  for (const {id} of entries) {
    const dir = path.join(ROOT, '.artifacts', 'animation-pages', id);
    let runs = [];
    try { runs = await readdir(dir); } catch { }
    const withManifest = [];
    for (const run of runs) {
      if (await isFile(path.join(dir, run, 'manifest.json'))) withManifest.push(run);
    }
    if (withManifest.length < 1) problems.push(`${id}: .artifacts 无抓帧运行记录`);
  }
  return problems;
};

const mode = process.argv[2];
let problems = [];
if (mode === 'structure01-12') problems = await checkStructure();
else if (mode === 'published01-12') problems = await checkPublished(ALL_IDS);
else if (mode === 'carriers01-12') problems = await checkCarriers(ALL_IDS);
else if (mode === 'newshangfa') {
  const expected = Object.fromEntries(Array.from({length: 16}, (_, i) => [String(i + 13).padStart(2, '0'), 1]));
  problems = await checkNewNodes('src/animations/commercial-law', expected);
}
else if (mode === 'newjingzhi') {
  problems = [
    ...(await checkNewNodes('src/animations/economic-law', Object.fromEntries(Array.from({length: 10}, (_, i) => [String(i + 1).padStart(2, '0'), 1])))),
    ...(await checkNewNodes('src/animations/labor-social-law', Object.fromEntries(Array.from({length: 4}, (_, i) => [String(i + 1).padStart(2, '0'), 1])))),
    ...(await checkNewNodes('src/animations/environment-resource-law', Object.fromEntries(Array.from({length: 2}, (_, i) => [String(i + 1).padStart(2, '0'), 1])))),
    ...(await checkNewNodes('src/animations/intellectual-property-law', Object.fromEntries(Array.from({length: 14}, (_, i) => [String(i + 1).padStart(2, '0'), 1])))),
  ];
}
else if (mode === 'capture-evidence') problems = await checkCaptureEvidence(ALL_IDS);
else { console.error(`unknown mode: ${mode}`); process.exit(2); }

if (problems.length > 0) {
  console.log(`FAIL ${mode}: ${problems.length} 项未过`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
console.log(`OK ${mode}`);
