import {readFile, readdir, stat} from 'node:fs/promises';
import path from 'node:path';

const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');
const BASELINE_PATH = path.join(import.meta.dirname, 'animation-style-baseline.json');
const ALLOWED_CHANNELS = new Set(['annotation', 'connector', 'contrast', 'enclosure', 'icon', 'locator', 'motion', 'spatial']);
const ALLOWED_ANCHORS = new Set(['boundary', 'comparison-axis', 'concept-icon', 'document-fork', 'flow-path', 'flow-target', 'role-pair', 'timeline-gate', 'typographic-sequence']);
const ALLOWED_TEXT_TREATMENTS = new Set(['chip', 'external-negation', 'label-block', 'soft-highlight', 'stamp', 'thin-underline']);
const MINIMUM_PLAYER_CONTROL_SAFE_BOTTOM = 160;
const MIN_SCENE_ROW_ICONS = 4;
const MIN_SCENE_DISTINCT_ICONS = 3;
const MIN_SCENE_WATERMARK_TOTEMS = 1;
const TOTEM_MIN_PIXELS = 90;
const MAX_SCENE_KNOWLEDGE_POINTS = 8;

const isFile = async (filePath) => {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
};

const collectFiles = async (directory, predicate) => {
  const files = [];
  for (const entry of await readdir(directory, {withFileTypes: true})) {
    const candidate = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(candidate, predicate));
    else if (predicate(candidate)) files.push(candidate);
  }
  return files;
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

const sceneSection = (source, exportName) => {
  const startToken = `export const ${exportName}`;
  const start = source.indexOf(startToken);
  if (start < 0) return undefined;
  const next = source.indexOf('\nexport const ', start + startToken.length);
  return source.slice(start, next < 0 ? source.length : next);
};

const quote = (value) => `"${value}"`;

const tagChunk = (section, at) => {
  const end = section.indexOf('/>', at);
  return end >= 0 && end - at < 400 ? section.slice(at, end) : section.slice(at, at + 260);
};

const countIcons = (section, names) => {
  let rowIcons = 0;
  let totems = 0;
  const distinct = new Set();
  for (const name of names) {
    let cursor = 0;
    for (;;) {
      const at = section.indexOf(`<${name}`, cursor);
      if (at < 0) break;
      cursor = at + name.length + 1;
      if (/[A-Za-z0-9_$]/.test(section.charAt(at + name.length + 1))) continue;
      const chunk = tagChunk(section, at);
      const dims = [...chunk.matchAll(/(?:size|width|height)=\{(\d+)\}/g)].map((match) => Number(match[1]));
      if (dims.some((value) => value >= TOTEM_MIN_PIXELS)) totems += 1;
      else {
        rowIcons += 1;
        distinct.add(name);
      }
    }
  }
  let cursor = 0;
  for (;;) {
    const at = section.indexOf('<svg', cursor);
    if (at < 0) break;
    cursor = at + 4;
    const chunk = tagChunk(section, at);
    const dims = [...chunk.matchAll(/(?:width|height)=\{(\d+)\}/g)].map((match) => Number(match[1]));
    if (dims.length > 0 && dims.every((value) => value >= TOTEM_MIN_PIXELS)) totems += 1;
    else {
      rowIcons += 1;
      distinct.add('inline-svg');
    }
  }
  return {rowIcons, totems, distinct};
};

const main = async () => {
  const baseline = JSON.parse(await readFile(BASELINE_PATH, 'utf8'));
  const legacyIds = new Set(baseline.legacyStructureAuditIds ?? []);
  const legacyFinalStateAuditIds = new Set(baseline.legacyFinalStateAuditIds ?? []);
  const legacyPlayerControlSafeAreaIds = new Set(baseline.legacyPlayerControlSafeAreaIds ?? []);
  const errors = [];
  let auditedScenes = 0;
  let skippedNodes = 0;

  await discoverAnimations(ANIMATIONS_ROOT);

  for (const animation of animationDirectories.sort((left, right) => left.id.localeCompare(right.id))) {
    const contractPath = path.join(animation.directory, 'visual-structure.json');
    if (!(await isFile(contractPath))) {
      if (legacyIds.has(animation.id)) {
        skippedNodes += 1;
        continue;
      }
      errors.push(`${animation.id}: new animation node must define visual-structure.json`);
      continue;
    }

    let contract;
    try {
      contract = JSON.parse(await readFile(contractPath, 'utf8'));
    } catch (error) {
      errors.push(`${animation.id}: invalid visual-structure.json (${error.message})`);
      continue;
    }

    if (contract.version !== 1) errors.push(`${animation.id}: visual-structure.json version must be 1`);
    if (!Array.isArray(contract.scenes) || contract.scenes.length < 2) {
      errors.push(`${animation.id}: visual-structure.json must declare at least two scenes`);
      continue;
    }

    const sceneFiles = await collectFiles(path.join(animation.directory, 'remotion'), (file) => file.endsWith('.tsx'));
    const source = (await Promise.all(sceneFiles.map((file) => readFile(file, 'utf8')))).join('\n');
    const lucideImports = new Set(
      [...source.matchAll(/import\s*\{([^}]+)\}\s*from\s*'lucide-react'/g)].flatMap((match) => match[1].split(',').map((name) => name.trim())).filter(Boolean),
    );

    if (!legacyPlayerControlSafeAreaIds.has(animation.id)) {
      if (!Number.isFinite(contract.playerControlSafeBottom) || contract.playerControlSafeBottom < MINIMUM_PLAYER_CONTROL_SAFE_BOTTOM) {
        errors.push(`${animation.id}: playerControlSafeBottom must be at least ${MINIMUM_PLAYER_CONTROL_SAFE_BOTTOM} authoring pixels`);
      }
      if (!source.includes(`const PLAYER_CONTROL_SAFE_BOTTOM = ${contract.playerControlSafeBottom};`)) {
        errors.push(`${animation.id}: Remotion source must define PLAYER_CONTROL_SAFE_BOTTOM from visual-structure.json`);
      }
      if (!source.includes('data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}')) {
        errors.push(`${animation.id}: root canvas must expose the player control safe-area marker`);
      }
      if (!source.includes('bottom: PLAYER_CONTROL_SAFE_BOTTOM')) {
        errors.push(`${animation.id}: teaching-content container must reserve the player control safe area`);
      }
    }

    const ids = new Set();
    const layouts = new Set();
    const grammarVocabulary = new Set();
    const anchorVocabulary = new Set();
    const textTreatmentVocabulary = new Set();

    for (const scene of contract.scenes) {
      auditedScenes += 1;
      const prefix = `${animation.id}/${scene.id ?? 'unknown'}`;
      if (typeof scene.id !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(scene.id)) errors.push(`${prefix}: id must be descriptive kebab-case`);
      if (ids.has(scene.id)) errors.push(`${prefix}: duplicate scene id`);
      ids.add(scene.id);
      if (typeof scene.export !== 'string' || !scene.export.endsWith('Scene')) errors.push(`${prefix}: export must name a Scene component`);
      if (typeof scene.layout !== 'string' || scene.layout.length < 5) errors.push(`${prefix}: layout must name the actual composition skeleton`);
      layouts.add(scene.layout);

      const grammars = Array.isArray(scene.grammar) ? scene.grammar : [];
      if (grammars.length < 2) errors.push(`${prefix}: declare at least two relationship grammars`);
      for (const grammar of grammars) grammarVocabulary.add(grammar);

      if (!ALLOWED_ANCHORS.has(scene.anchor)) errors.push(`${prefix}: anchor must name a supported structural visual anchor`);
      anchorVocabulary.add(scene.anchor);

      const textTreatments = Array.isArray(scene.textTreatments) ? scene.textTreatments : [];
      if (textTreatments.length < 1) errors.push(`${prefix}: declare at least one semantic text treatment`);
      for (const treatment of textTreatments) {
        if (!ALLOWED_TEXT_TREATMENTS.has(treatment)) errors.push(`${prefix}: unsupported text treatment ${quote(treatment)}`);
        textTreatmentVocabulary.add(treatment);
      }

      const channels = Array.isArray(scene.focalChannels) ? scene.focalChannels : [];
      if (new Set(channels).size < 3) errors.push(`${prefix}: focal rule needs at least three semantic channels; color and typography do not count`);
      for (const channel of channels) {
        if (!ALLOWED_CHANNELS.has(channel)) errors.push(`${prefix}: unsupported focal channel ${quote(channel)}`);
      }

      const tokens = Array.isArray(scene.tokens) ? scene.tokens : [];

      const section = sceneSection(source, scene.export);
      if (!section) {
        errors.push(`${prefix}: cannot find export ${quote(scene.export)} in remotion TSX`);
        continue;
      }
      const grammarMarker = grammars.join(',');
      const channelMarker = channels.join(',');
      if (!section.includes(`data-layout=${quote(scene.layout)}`)) errors.push(`${prefix}: TSX is missing its declared data-layout marker`);
      if (!section.includes(`data-visual-anchor=${quote(scene.anchor)}`)) errors.push(`${prefix}: TSX is missing its declared visual-anchor marker`);
      if (!section.includes(`data-text-treatments=${quote(textTreatments.join(','))}`)) errors.push(`${prefix}: TSX is missing its declared text-treatment marker`);
      if (!section.includes(`data-visual-grammar=${quote(grammarMarker)}`)) errors.push(`${prefix}: TSX is missing its declared relationship grammar marker`);
      if (!section.includes(`data-focal-channels=${quote(channelMarker)}`)) errors.push(`${prefix}: TSX is missing its declared scene focal-channel marker`);
      if (!section.includes('data-focal-rule=')) errors.push(`${prefix}: TSX must identify a focal rule, not merely styled text`);
      if (!section.includes('data-focal-channels=')) errors.push(`${prefix}: focal rule must declare co-located semantic channels`);

      if (!legacyFinalStateAuditIds.has(animation.id)) {
        const finalKnowledge = Array.isArray(scene.finalKnowledge) ? scene.finalKnowledge : [];
        const statefulObjects = Array.isArray(scene.statefulObjects) ? scene.statefulObjects : undefined;
        if (finalKnowledge.length < 1) errors.push(`${prefix}: declare at least one finalKnowledge id for stable-final-frame audit`);
        if (finalKnowledge.length > MAX_SCENE_KNOWLEDGE_POINTS) {
          errors.push(`${prefix}: ${finalKnowledge.length} finalKnowledge ids in one scene exceeds ${MAX_SCENE_KNOWLEDGE_POINTS}; do not cram a stacked-list frame — paginate actively, splitting the content into more focused scenes`);
        }
        if (!statefulObjects) errors.push(`${prefix}: statefulObjects must be an array, empty only when no knowledge object moves`);
        for (const knowledgeId of finalKnowledge) {
          if (typeof knowledgeId !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(knowledgeId)) {
            errors.push(`${prefix}: finalKnowledge ids must be descriptive kebab-case`);
            continue;
          }
          if (!section.includes(`data-final-knowledge=${quote(knowledgeId)}`)) {
            errors.push(`${prefix}: TSX is missing final knowledge marker ${quote(knowledgeId)}`);
          }
        }
        for (const objectId of statefulObjects ?? []) {
          if (typeof objectId !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(objectId)) {
            errors.push(`${prefix}: statefulObjects ids must be descriptive kebab-case`);
            continue;
          }
          if (!section.includes(`data-stateful-source=${quote(objectId)}`)) {
            errors.push(`${prefix}: stateful object ${quote(objectId)} is missing its source marker`);
          }
          if (!section.includes(`data-stateful-terminal=${quote(objectId)}`)) {
            errors.push(`${prefix}: stateful object ${quote(objectId)} must remain as a terminal child or result block`);
          }
        }
      }
      if (section.includes('kind="circle"') || section.includes('kind="cross"')) errors.push(`${prefix}: text-overlay circles and strike-through marks are prohibited; use soft highlight, thin underline, or an external negation icon`);
      for (const token of tokens) {
        if (!section.includes(`<${token}`)) errors.push(`${prefix}: declared semantic token ${quote(token)} is not rendered in the scene`);
      }

      const iconNames = new Set([...lucideImports, ...tokens]);
      const counted = countIcons(section, iconNames);
      const totems = counted.totems + (section.match(/watermark=/g) ?? []).length;
      if (counted.rowIcons < MIN_SCENE_ROW_ICONS) {
        errors.push(`${prefix}: scene renders only ${counted.rowIcons} row-anchor icon(s); give every knowledge row or card a semantic icon anchor (minimum ${MIN_SCENE_ROW_ICONS})`);
      }
      if (counted.distinct.size < MIN_SCENE_DISTINCT_ICONS) {
        errors.push(`${prefix}: scene uses only ${counted.distinct.size} distinct icon(s); vary the semantic pictograms (minimum ${MIN_SCENE_DISTINCT_ICONS})`);
      }
      if (totems < MIN_SCENE_WATERMARK_TOTEMS) {
        errors.push(`${prefix}: no watermark totem; render one large translucent pictogram (>= ${TOTEM_MIN_PIXELS}px) behind a panel or corner for image-based recall`);
      }
    }

    if (source.includes('@remotion/rough-notation')) errors.push(`${animation.id}: audited nodes may not overlay rough annotations on focal text`);

    const directionPath = path.join(animation.directory, 'visual-direction.json');
    if (await isFile(directionPath)) {
      try {
        const direction = JSON.parse(await readFile(directionPath, 'utf8'));
        for (const [concept, component] of Object.entries(direction.conceptTokens ?? {})) {
          if (typeof component === 'string' && !source.includes(`<${component}`)) {
            errors.push(`${animation.id}: declared concept token ${JSON.stringify(concept)} pictogram ${component} is not rendered in the Remotion source`);
          }
        }
      } catch {
        // invalid JSON is already reported by the styles audit
      }
    }

    const minimumLayouts = Math.min(contract.scenes.length, Math.max(3, Number(contract.minimumDistinctLayouts) || 3));
    if (layouts.size < minimumLayouts) errors.push(`${animation.id}: ${contract.scenes.length} scenes reuse only ${layouts.size} layout skeleton(s); require ${minimumLayouts}`);
    if (grammarVocabulary.size < 4) errors.push(`${animation.id}: relationship grammar is too repetitive across scenes`);
    if (anchorVocabulary.size < 3) errors.push(`${animation.id}: visual anchors are too repetitive across scenes`);
    if (textTreatmentVocabulary.size < 3) errors.push(`${animation.id}: text styling is too repetitive; use at least three semantic treatment types across the node`);
  }

  console.log(`Animation structure audit: ${auditedScenes} scene(s) checked; ${skippedNodes} legacy node(s) explicitly grandfathered.`);
  if (errors.length > 0) {
    for (const error of errors) console.error(`ERROR ${error}`);
    process.exitCode = 1;
  }
};

await main();
