import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_WORKSPACE = process.env.SIYUAN_WORKSPACE || 'D:/1STUDY/SIYUAN';
const SIYUAN_BIN = process.env.SIYUAN_BIN || 'D:/scoop/shims/siyuan.exe';
const BLOCK_ID_PATTERN = /^[0-9]{14}-[a-z0-9]{7}$/;
const STABLE_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const BASE_URL = 'https://inkloomer.github.io/inkloom/animation-avif';

const usage = `
Insert one published InkLoom scene immediately after one exact SiYuan block.

Usage:
  pnpm siyuan:embed-scene -- --target-id <block-id> --animation-id <animation-id> --scene-id <scene-id> [--apply]

Options:
  --target-id <id>          Exact SiYuan source block ID
  --animation-id <id>       Stable InkLoom animation ID
  --scene-id <id>           Stable semantic scene ID
  --workspace <path>        SiYuan workspace (default: SIYUAN_WORKSPACE or D:/1STUDY/SIYUAN)
  --apply                   Write after validation; omitted means CLI dry-run only
  --skip-remote-check       Allow --apply without verifying the production URL
  --help                    Show this help
`;

const parseOptions = (rawArguments) => {
  const options = {
    animationId: '',
    apply: false,
    sceneId: '',
    skipRemoteCheck: false,
    targetId: '',
    workspace: DEFAULT_WORKSPACE,
  };
  const valueOptions = new Map([
    ['--animation-id', 'animationId'],
    ['--scene-id', 'sceneId'],
    ['--target-id', 'targetId'],
    ['--workspace', 'workspace'],
  ]);

  for (let index = 0; index < rawArguments.length; index += 1) {
    const argument = rawArguments[index];
    if (argument === '--') continue;
    if (argument === '--help' || argument === '-h') return {...options, help: true};
    if (argument === '--apply') {
      options.apply = true;
      continue;
    }
    if (argument === '--skip-remote-check') {
      options.skipRemoteCheck = true;
      continue;
    }

    const equalsIndex = argument.indexOf('=');
    const optionName = equalsIndex === -1 ? argument : argument.slice(0, equalsIndex);
    const optionKey = valueOptions.get(optionName);
    if (!optionKey) throw new Error(`Unknown option: ${argument}`);
    const value = equalsIndex === -1 ? rawArguments[index + 1] : argument.slice(equalsIndex + 1);
    if (!value || value.startsWith('--')) throw new Error(`${optionName} requires a value.`);
    options[optionKey] = value;
    if (equalsIndex === -1) index += 1;
  }

  if (!BLOCK_ID_PATTERN.test(options.targetId)) throw new Error('--target-id must be a SiYuan block ID.');
  if (!STABLE_ID_PATTERN.test(options.animationId)) throw new Error('--animation-id must be a stable kebab-case ID.');
  if (!STABLE_ID_PATTERN.test(options.sceneId)) throw new Error('--scene-id must be a stable kebab-case ID.');
  if (options.skipRemoteCheck && !options.apply) throw new Error('--skip-remote-check is only meaningful with --apply.');
  return options;
};

const runSiyuan = (options, commandArguments, {dryRun = false} = {}) => {
  const argumentsWithGlobals = ['-w', options.workspace];
  if (dryRun) argumentsWithGlobals.push('--dry-run');
  argumentsWithGlobals.push(...commandArguments);
  const result = spawnSync(SIYUAN_BIN, argumentsWithGlobals, {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    windowsHide: true,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || `SiYuan exited with ${result.status}`).trim());
  }
  return result.stdout.trim();
};

const parseJson = (output, operation) => {
  try {
    return JSON.parse(output);
  } catch (error) {
    throw new Error(`${operation} did not return JSON: ${error.message}`);
  }
};

const asBlockArray = (value) => {
  if (Array.isArray(value)) return value;
  for (const key of ['blocks', 'children', 'data', 'rows']) {
    if (Array.isArray(value?.[key])) return value[key];
  }
  throw new Error('SiYuan block list response has an unsupported shape.');
};

const getBlock = (options, id) => parseJson(
  runSiyuan(options, ['block', 'get', '--id', id, '-f', 'json']),
  `block get ${id}`,
);

const getChildren = (options, parentId) => asBlockArray(parseJson(
  runSiyuan(options, ['block', 'children', '--id', parentId, '-f', 'json']),
  `block children ${parentId}`,
));

const getDocumentRows = (options, rootId) => {
  if (!BLOCK_ID_PATTERN.test(rootId)) throw new Error(`Invalid document root ID returned by SiYuan: ${rootId}`);
  const sql = `SELECT id,parent_id,root_id,type,subtype,content,markdown FROM blocks WHERE root_id='${rootId}'`;
  return asBlockArray(parseJson(
    runSiyuan(options, ['sql', sql, '-l', '10000', '-f', 'json']),
    `document block query ${rootId}`,
  ));
};

const markdownOf = (block) => String(block?.markdown || block?.content || '');
const idOf = (block) => String(block?.id || '');
const parentIdOf = (block) => String(block?.parentID || block?.parent_id || '');
const rootIdOf = (block) => String(block?.rootID || block?.root_id || '');

const readSceneAsset = (options) => {
  const animationDirectory = path.join(PROJECT_ROOT, 'public', 'animation-avif', options.animationId);
  const manifestPath = path.join(animationDirectory, 'manifest.json');
  if (!fs.existsSync(manifestPath)) throw new Error(`Missing animation manifest: ${manifestPath}`);
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const scene = (manifest.scenes || []).find((candidate) => candidate.id === options.sceneId);
  if (!scene) throw new Error(`Scene ${options.sceneId} is not present in ${manifestPath}.`);
  if (!scene.file || path.basename(scene.file) !== scene.file) throw new Error(`Scene ${options.sceneId} has an unsafe file name.`);
  const assetPath = path.join(animationDirectory, scene.file);
  if (!fs.existsSync(assetPath) || fs.statSync(assetPath).size === 0) throw new Error(`Missing or empty scene asset: ${assetPath}`);
  return {
    assetPath,
    title: String(scene.title || options.sceneId),
    url: `${BASE_URL}/${options.animationId}/${scene.file}`,
  };
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const isGeneratedInkLoomImage = (block, url) => {
  const pattern = new RegExp(
    `^!\\[InkLoom 动图(?:：|:)[^\\]]*\\]\\(${escapeRegExp(url)}\\)(?:\\s*\\{:[^}]*\\})?\\s*$`,
  );
  return pattern.test(markdownOf(block).trim());
};

const escapeAltText = (value) => value.replace(/[\]\r\n]+/g, ' ').trim();

const verifyRemoteAsset = async (url) => {
  let response = await fetch(url, {method: 'HEAD', redirect: 'follow'});
  if (response.status === 405) {
    response = await fetch(url, {headers: {Range: 'bytes=0-0'}, redirect: 'follow'});
  }
  if (!response.ok) throw new Error(`Production asset is not available (${response.status}): ${url}`);
};

const findUrlBlocks = (rows, url) => rows.filter((row) => markdownOf(row).includes(url));

const findNextSibling = (children, targetId) => {
  const targetIndex = children.findIndex((block) => idOf(block) === targetId);
  if (targetIndex === -1) throw new Error(`Target block ${targetId} is not a direct child of its reported parent.`);
  return children[targetIndex + 1] || null;
};

const verifyFinalState = (options, targetBefore, asset) => {
  const targetAfter = getBlock(options, options.targetId);
  if (markdownOf(targetAfter) !== markdownOf(targetBefore)) throw new Error('The original target block changed during insertion.');
  const parentId = parentIdOf(targetBefore);
  const nextSibling = findNextSibling(getChildren(options, parentId), options.targetId);
  if (!nextSibling || !markdownOf(nextSibling).includes(asset.url)) {
    throw new Error(`The InkLoom image is not immediately after ${options.targetId}.`);
  }
  const matches = findUrlBlocks(getDocumentRows(options, rootIdOf(targetBefore)), asset.url);
  if (matches.length !== 1) throw new Error(`Expected one document occurrence of the scene URL, found ${matches.length}.`);
  return idOf(nextSibling);
};

const main = async () => {
  const options = parseOptions(process.argv.slice(2));
  if (options.help) {
    console.log(usage.trim());
    return;
  }

  const target = getBlock(options, options.targetId);
  const parentId = parentIdOf(target);
  const rootId = rootIdOf(target);
  if (!BLOCK_ID_PATTERN.test(parentId)) throw new Error(`Target block has no valid parentID: ${options.targetId}`);
  if (!BLOCK_ID_PATTERN.test(rootId)) throw new Error(`Target block has no valid rootID: ${options.targetId}`);

  const asset = readSceneAsset(options);
  const imageMarkdown = `![InkLoom 动图：${escapeAltText(asset.title)}](${asset.url})`;
  const children = getChildren(options, parentId);
  const nextSibling = findNextSibling(children, options.targetId);
  const urlBlocks = findUrlBlocks(getDocumentRows(options, rootId), asset.url);
  if (urlBlocks.length > 1) throw new Error(`The scene URL already appears in ${urlBlocks.length} blocks; repair duplicates first.`);

  console.log(`Target: ${options.targetId} (${target.hPath || rootId})`);
  console.log(`Scene: ${options.animationId}/${options.sceneId}`);
  console.log(`Asset: ${asset.assetPath}`);
  console.log(`URL: ${asset.url}`);

  if (nextSibling && markdownOf(nextSibling).includes(asset.url)) {
    if (urlBlocks.length !== 1) throw new Error('The next sibling contains the URL but document duplicate lookup disagrees.');
    console.log(`EXISTS ${idOf(nextSibling)} is already the immediate next sibling.`);
    return;
  }

  const existing = urlBlocks[0] || null;
  if (existing && !isGeneratedInkLoomImage(existing, asset.url)) {
    throw new Error(`The scene URL exists in non-generated block ${idOf(existing)}; refusing to move or duplicate it.`);
  }

  if (!options.apply) {
    if (existing) {
      runSiyuan(options, ['block', 'move', '--id', idOf(existing), '--parent', parentId, '--previous', options.targetId], {dryRun: true});
      console.log(`DRY-RUN move ${idOf(existing)} immediately after ${options.targetId}.`);
    } else {
      runSiyuan(options, ['block', 'insert', '--parent', parentId, '--previous', options.targetId, '--data', imageMarkdown], {dryRun: true});
      console.log(`DRY-RUN insert immediately after ${options.targetId}.`);
    }
    console.log('Re-run with --apply after the production asset is deployed and verified.');
    return;
  }

  if (!options.skipRemoteCheck) await verifyRemoteAsset(asset.url);
  if (existing) {
    runSiyuan(options, ['block', 'move', '--id', idOf(existing), '--parent', parentId, '--previous', options.targetId, '-f', 'json']);
  } else {
    runSiyuan(options, ['block', 'insert', '--parent', parentId, '--previous', options.targetId, '--data', imageMarkdown, '-f', 'json']);
  }
  const insertedId = verifyFinalState(options, target, asset);
  console.log(`APPLIED ${insertedId} is immediately after ${options.targetId}; URL is unique in the document.`);
};

main().catch((error) => {
  console.error(`ERROR ${error.message}`);
  process.exitCode = 1;
});
