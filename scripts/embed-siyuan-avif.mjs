import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SIYUAN_BIN = process.env.SIYUAN_BIN || 'D:/scoop/shims/siyuan.exe';
const SIYUAN_WORKSPACE = process.env.SIYUAN_WORKSPACE || 'D:/1STUDY/SIYUAN';
const MEDIA_FORMATS = {
  avif: {directory: 'animation-avif', extension: 'avif'},
  webp: {directory: 'animation-webp', extension: 'webp'},
};
const parseOptions = (rawArguments) => {
  let format = 'avif';
  const flags = new Set();

  for (let index = 0; index < rawArguments.length; index += 1) {
    const argument = rawArguments[index];
    if (argument === '--format') {
      format = rawArguments[index + 1];
      if (!format || format.startsWith('--')) throw new Error('--format requires a value.');
      index += 1;
      continue;
    }
    if (argument.startsWith('--format=')) {
      format = argument.slice('--format='.length);
      continue;
    }
    flags.add(argument);
  }

  if (!Object.hasOwn(MEDIA_FORMATS, format)) throw new Error(`--format must be one of: ${Object.keys(MEDIA_FORMATS).join(', ')}.`);
  return {apply: flags.has('--apply'), format, repairPlacements: flags.has('--repair-placements')};
};

const options = parseOptions(process.argv.slice(2));
const mediaProfile = MEDIA_FORMATS[options.format];
const PUBLIC_MEDIA_ROOT = path.join(PROJECT_ROOT, 'public', mediaProfile.directory);
const BASE_URL = `https://inkloomer.github.io/inkloom/${mediaProfile.directory}`;
const IMAGE_BLOCK_PATTERN = new RegExp(String.raw`^!\[InkLoom 动图(?:：|:)[^\]]+\]\((https:\/\/inkloomer\.github\.io\/inkloom\/${mediaProfile.directory}\/[^)\s]+)\)(?:\s*\{:[^}]*\})?\s*$`);

const ROOTS = {
  'dispute-resolution': '20260704175116-40dmfvd',
  'law-attributes': '20260704175116-40dmfvd',
  'trial-procedure': '20260704175116-40dmfvd',
  'counterclaim-vs-defense': '20260705175231-u6w0fga',
  'lawsuit-elements': '20260705175231-u6w0fga',
  'basic-principles-triangle': '20260705175517-okffyhb',
  'recusal-procedure-path': '20260705175517-okffyhb',
  'trial-organization-path': '20260705175517-okffyhb',
  'legal-jurisdiction': '20260707202545-nqw4s39',
  'territorial-jurisdiction': '20260707202545-nqw4s39',
  'guarantee-party': '20260729174154-lxj8top',
  'party-capacity': '20260729174154-lxj8top',
  'party-change': '20260729174154-lxj8top',
  'proper-party': '20260729174154-lxj8top',
  'joint-litigation': '20260729232444-52itzjn',
  'representative-litigation': '20260729232444-52itzjn',
};

const ANCHORS = {
  'dispute-resolution': {
    spectrum: {anchor: '一、多元纠纷解决机制', type: 'h'},
    informal: {anchor: '和解：纠纷当事人就民事纠纷自行协商并达成协议', type: 'i'},
    formal: {anchor: '仲裁：财产纠纷双方当事人达成仲裁协议，将纠纷提交仲裁机构予以裁决', type: 'i'},
    enforceability: {anchor: '调解达成的协议不具有强制执行力。', type: 'i', exact: true},
    recap: {anchor: '民事纠纷发生后，当事人可以通过如下四种方式予以解决', type: 'p'},
  },
  'law-attributes': {
    overview: {anchor: '三、民事诉讼法的属性', type: 'h'},
    standard: {anchor: '部门法。区分标准：根据民事诉讼法调整的社会关系', type: 'i'},
    recap: {anchor: '公法。区分标准：根据民事诉讼法适用的主体', type: 'i'},
  },
  'trial-procedure': {
    criterion: {anchor: '民事审判程序包括两大类', type: 'p'},
    litigation: {anchor: '诉讼程序：如一审、二审、再审程序', type: 'i'},
    'non-litigation': {anchor: '非讼程序：如特别程序', type: 'i'},
    'voter-exception': {anchor: '选民资格案件的特殊性', type: 'callout'},
    comparison: {anchor: '民事审判程序的分类', type: 'p', exact: true},
  },
  'counterclaim-vs-defense': {
    concept: {anchor: '概念：反诉是指在诉讼进行中，本诉被告对本诉原告向法院提出独立的反请求', type: 'i'},
    technique: {anchor: '深度拓展：反诉是一个独立的诉', type: 'callout'},
    cases: {anchor: '原告起诉被告归还借款10万元，被告主张借款已经归还', type: 'c'},
    independence: {anchor: '本、反诉相互独立，原告申请撤诉', type: 'p'},
    recap: {anchor: '五、核心概念对比总结', type: 'h'},
  },
  'lawsuit-elements': {
    concept: {anchor: '诉的主体：即当事人', type: 'i'},
    distinction: {anchor: '概念区分', type: 'callout'},
    classification: {anchor: '命题角度：诉讼标的 VS. 诉讼请求', type: 'h'},
    transformation: {anchor: '3. 形成之诉（变更之诉）', type: 'h'},
    recap: {targetId: '20260705180806-dc570gb'},
  },
  'basic-principles-triangle': {
    relationships: {anchor: '第一节 基本原则', type: 'h'},
  },
  'recusal-procedure-path': {
    scope: {anchor: '1. 适用对象', type: 'h'},
    timing: {anchor: '4. 申请程序', type: 'h'},
    'pending-effect': {anchor: '5. 申请的效力', type: 'h'},
    decision: {anchor: '6. 回避的决定', type: 'h'},
    remedy: {anchor: '7. 救济', type: 'h'},
    'pause-vs-continue': {anchor: '8. 回避的效力', type: 'h'},
  },
  'trial-organization-path': {
    'path-gate': {anchor: '1. 各种程序的审判组织', type: 'h'},
    'first-instance': {anchor: '（1）一审程序', type: 'h'},
    'second-instance': {anchor: '（2）二审程序', type: 'h'},
    'mid-court-ban': {anchor: '2. 不允许适用独任制的案件', type: 'h'},
    misconceptions: {anchor: '合议制是由审判人员', type: 'p'},
    jurors: {anchor: '审级要件', type: 'i'},
  },
  'legal-jurisdiction': {
    definition: {targetId: '20260707202548-whgqis6'},
    'court-scope': {targetId: '20260707202548-c6ddhxc'},
    'dispute-resolution': {anchor: '第一节 主管', type: 'h'},
    'mediation-confirmation': {anchor: '一、法院主管与人民调解的关系', type: 'h'},
    'arbitration-exclusion': {anchor: '二、法院主管与仲裁机构（民商事仲裁）的关系', type: 'h'},
    'labor-arbitration': {anchor: '三、法院主管与劳动仲裁的关系', type: 'h'},
    'relationship-map': {targetId: '20260707202548-l9hkhy7'},
  },
  'territorial-jurisdiction': {
    orientation: {anchor: '第四节 地域管辖', type: 'h', exact: true},
    'general-jurisdiction': {anchor: '一、一般地域管辖', type: 'h', exact: true},
    'special-jurisdiction': {anchor: '二、特殊地域管辖', type: 'h', exact: true},
    'exclusive-jurisdiction': {anchor: '三、专属管辖', type: 'h', exact: true},
    'agreement-jurisdiction': {anchor: '四、协议管辖', type: 'h', exact: true},
    'contract-three-step': {anchor: '二 合同纠纷的管辖', type: 'h', exact: true},
  },
  'guarantee-party': {
    'general-guarantee': {anchor: '1 一般保证：', type: 'h', exact: true},
    'joint-liability-guarantee': {anchor: '2 连带保证：', type: 'h', exact: true},
    comparison: {anchor: '10. 担保法律关系中当事人的确定', type: 'h'},
  },
  'party-capacity': {
    'rights-capacity': {anchor: '一、诉讼权利能力', type: 'h'},
    'capacity-comparison': {anchor: '二、诉讼权利能力和诉讼行为能力', type: 'h'},
    'legal-representation': {anchor: '二、诉讼行为能力', type: 'h'},
    recap: {targetId: '20260729213047-f8vavpo'},
  },
  'party-change': {
    'change-types': {targetId: '20260729213047-4uhlmky'},
    succession: {anchor: '一 基于法律规定导致当事人变更的情形', type: 'h', exact: true},
    'substantive-transfer': {anchor: '二 基于当事人的意思导致当事人变更的情形', type: 'h', exact: true},
    'party-constancy': {targetId: '20260729213047-6q63224'},
  },
  'proper-party': {
    principle: {anchor: '当事人适格是指针对具体的诉讼', type: 'i'},
    'confirmation-interest': {anchor: '确认之诉中，对诉讼标的有确认利益', type: 'i', targetId: '20260729213047-v6z1s35'},
    'management-right': {anchor: '根据当事人的意思或法律规定，依法对他人民事法律关系或民事权利享有管理权的主体，虽然不是争议民事法律关系的主体，却是适格的当事人。', type: 'p', exact: true},
    'public-interest': {anchor: '公益诉讼中，有权提起公益诉讼的机关、组织，虽然不是争议的实体侵权法律关系一方当事人，但基于民事诉讼法的特殊规定，可以作为适格原告提起公益诉讼。', type: 'p', exact: true},
    'capacity-comparison': {anchor: '当事人适格 VS. 诉讼权利能力', type: 'h'},
  },
  'joint-litigation': {
    definition: {anchor: '一、共同诉讼的概念', type: 'h'},
    'ordinary-joint-litigation': {anchor: '二、普通共同诉讼', type: 'h'},
    'necessary-joint-litigation': {anchor: '三、必要共同诉讼', type: 'h'},
    comparison: {anchor: '3. 普通共同诉讼人之间的关系', type: 'h'},
    'common-cases': {anchor: '4. 常考必要共同诉讼人：', type: 'h'},
    recap: {anchor: '知识体系', type: 'h'},
  },
  'representative-litigation': {
    concept: {anchor: '1. 概念：当事人一方或双方', type: 'h'},
    'representative-authority': {anchor: '2. 代表人的权限：', type: 'h'},
    'determined-members': {anchor: '特征：起诉时，人数众多的一方当事人人数确定。', type: 'i', exact: true},
    'undetermined-members': {anchor: '5. 人数不确定的代表人诉讼', type: 'h'},
    'securities-special': {anchor: '证券纠纷中，投资者通过普通的代表人诉讼维权难度大', type: 'p'},
    comparison: {anchor: '四、代表人诉讼', type: 'h'},
  },
};

const apply = options.apply;
const dryRun = !apply;
const repairPlacements = options.repairPlacements;

const normalize = (value) => String(value || '')
  .replace(/<[^>]*>/g, '')
  .replace(/[*_=~`>#()[\]{}]/g, '')
  .replace(/\s+/g, '')
  .trim();

const run = (commandArgs) => {
  const result = spawnSync(SIYUAN_BIN, commandArgs, {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    windowsHide: true,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || `SiYuan exited with ${result.status}`);
  return result.stdout;
};

const readBlocks = () => {
  const rootIds = [...new Set(Object.values(ROOTS))];
  const rows = [];
  for (const rootId of rootIds) {
    const sql = `SELECT id,parent_id,root_id,type,subtype,content,markdown,sort FROM blocks WHERE root_id='${rootId}' ORDER BY sort,id`;
    const output = run(['-w', SIYUAN_WORKSPACE, 'sql', sql, '-l', '10000', '-f', 'json']);
    rows.push(...JSON.parse(output));
  }
  return rows;
};

const readManifests = () => {
  const manifests = [];
  for (const animationId of Object.keys(ANCHORS)) {
    const file = path.join(PUBLIC_MEDIA_ROOT, animationId, 'manifest.json');
    const manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const scene of manifest.scenes || []) manifests.push({animationId, scene});
  }
  return manifests;
};

const findTarget = (rows, animationId, sceneId) => {
  const spec = ANCHORS[animationId]?.[sceneId];
  if (!spec) throw new Error(`Missing source anchor for ${animationId}/${sceneId}.`);
  const rootId = ROOTS[animationId];
  if (spec.targetId) {
    const target = rows.find((row) => row.id === spec.targetId && row.root_id === rootId);
    if (!target) throw new Error(`${animationId}/${sceneId} target block ${spec.targetId} was not found.`);
    return target;
  }
  const wanted = normalize(spec.anchor);
  const candidates = rows.filter((row) => row.root_id === rootId
    && (!spec.type || row.type === spec.type)
    && (!spec.parentAnchor || normalize(rows.find((parent) => parent.id === row.parent_id)?.content).includes(normalize(spec.parentAnchor)))
    && (spec.exact ? normalize(row.content) === wanted : normalize(`${row.content}\n${row.markdown}`).includes(wanted)));
  if (candidates.length !== 1) {
    const detail = candidates.map((row) => `${row.id} ${row.type}/${row.subtype} ${row.content}`).join('\n');
    throw new Error(`${animationId}/${sceneId} anchor matched ${candidates.length} blocks:\n${detail}`);
  }
  return candidates[0];
};

const extractId = (output) => {
  try {
    const parsed = JSON.parse(output);
    const visit = (value) => {
      if (!value || typeof value !== 'object') return null;
      if (typeof value.id === 'string') return value.id;
      for (const child of Object.values(value)) {
        const id = visit(child);
        if (id) return id;
      }
      return null;
    };
    return visit(parsed);
  } catch {
    return output.match(/[0-9]{14}-[a-z0-9]{7}/)?.[0] || null;
  }
};

const blocks = readBlocks();
const directImageBlocks = blocks.flatMap((row) => {
  const match = String(row.markdown || '').match(IMAGE_BLOCK_PATTERN);
  return match ? [{row, url: match[1]}] : [];
});
const existingUrls = new Set(directImageBlocks.map(({url}) => url));
const imageBlocksByUrl = new Map(directImageBlocks.map(({row, url}) => [url, row]));
const duplicateUrls = [...new Set(directImageBlocks
  .map(({url}) => url)
  .filter((url, index, urls) => urls.indexOf(url) !== index))];
if (duplicateUrls.length > 0) throw new Error(`Duplicate SiYuan image blocks already exist:\n${duplicateUrls.join('\n')}`);
const tasks = [];
for (const {animationId, scene} of readManifests()) {
  const target = findTarget(blocks, animationId, scene.id);
  const url = `${BASE_URL}/${animationId}/${scene.file}`;
  if (!fs.existsSync(path.join(PUBLIC_MEDIA_ROOT, animationId, scene.file))) {
    throw new Error(`Missing ${options.format.toUpperCase()} asset: ${url}`);
  }
  tasks.push({
    animationId,
    sceneId: scene.id,
    title: scene.title,
    url,
    target,
    exists: existingUrls.has(url),
  });
}

if (tasks.length !== 77) throw new Error(`Expected 77 scenes, found ${tasks.length}.`);
const uniqueTargets = new Set(tasks.map((task) => task.target.id));
if (uniqueTargets.size !== tasks.length) {
  const sharedTargets = [...uniqueTargets].flatMap((targetId) => {
    const scenes = tasks.filter((task) => task.target.id === targetId).map((task) => `${task.animationId}/${task.sceneId}`);
    return scenes.length > 1 ? [`${targetId}: ${scenes.join(', ')}`] : [];
  });
  throw new Error(`Every animated image needs its own source anchor:\n${sharedTargets.join('\n')}`);
}
console.log(`Resolved ${tasks.length} scenes to ${uniqueTargets.size} source blocks.`);
for (const task of tasks) {
  console.log(`${task.exists ? 'EXISTS' : dryRun ? 'DRY-RUN' : 'INSERT'} ${task.animationId}/${task.sceneId} -> ${task.target.id} (${task.target.content})`);
}

const pending = tasks.filter((task) => !task.exists);
if (repairPlacements) {
  if (pending.length > 0) throw new Error(`Cannot repair placement while ${pending.length} image block(s) are missing.`);
  for (const task of tasks) {
    const image = imageBlocksByUrl.get(task.url);
    if (!image) throw new Error(`Missing SiYuan image block: ${task.url}`);
    const command = ['-w', SIYUAN_WORKSPACE];
    if (dryRun) command.push('--dry-run');
    command.push('block', 'move', '--id', image.id, '--parent', task.target.parent_id, '--previous', task.target.id);
    run(command);
  }
  console.log(`${dryRun ? 'CLI dry-run validated' : 'Moved'} ${tasks.length} image blocks to unique source anchors.`);
  process.exit(0);
}

if (!apply) {
  for (const task of pending) {
    const markdown = `![InkLoom 动图：${task.title}](${task.url})`;
    run(['-w', SIYUAN_WORKSPACE, '--dry-run', 'block', 'insert', '--parent', task.target.parent_id, '--previous', task.target.id, '--data', markdown]);
  }
  console.log(`CLI dry-run passed for ${pending.length} new blocks. Re-run with --apply to insert them.`);
  process.exit(0);
}

const inserted = [];
for (const task of pending) {
  const markdown = `![InkLoom 动图：${task.title}](${task.url})`;
  const output = run(['-w', SIYUAN_WORKSPACE, 'block', 'insert', '--parent', task.target.parent_id, '--previous', task.target.id, '--data', markdown, '-f', 'json']);
  inserted.push({
    ...task,
    insertedId: extractId(output),
  });
}
console.log(`Inserted ${inserted.length} new blocks.`);
for (const task of inserted) console.log(`${task.insertedId || 'UNKNOWN'} ${task.url}`);
