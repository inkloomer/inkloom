/* eslint-disable no-console */
// Canvas utilization audit: measure how much of the usable 16:9 frame the stable
// teaching content actually occupies, and reject frames with large dead regions.
// The player-control-safe bottom band is cropped out before analysis.
//
// Usage:
//   import {auditStableFrames} from './audit-canvas-utilization.mjs'
//   node scripts/audit-canvas-utilization.mjs <run-directory>   (re-audit a captured run)

import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import sharp from 'sharp';

const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const ANIMATIONS_ROOT = path.join(PROJECT_ROOT, 'src', 'animations');

const GRID_COLUMNS = 4;
const GRID_ROWS = 3;
const ANALYSIS_WIDTH = 240;
const BACKGROUND_DIFFERENCE_THRESHOLD = 32;
const EMPTY_CELL_COVERAGE = 0.005;
// Calibrated 2026-08-31: icon-chip standard scenes measure 45-64% content coverage,
// the flagged sparse frames measure ~15%. 30% sits between with margin on both sides.
const MIN_TOTAL_COVERAGE = 0.3;
const MIN_BBOX_WIDTH = 0.62;
const MIN_BBOX_HEIGHT = 0.55;
const DEFAULT_CONTROL_SAFE_BOTTOM = 160;

const measureCoverage = (data, info) => {
  const {width, height, channels} = info;
  // Background = modal quantized color over the whole analysis bitmap.
  const bins = new Map();
  for (let pixel = 0; pixel < width * height; pixel += 1) {
    const offset = pixel * channels;
    const key = ((data[offset] >> 5) << 10) | ((data[offset + 1] >> 5) << 5) | (data[offset + 2] >> 5);
    bins.set(key, (bins.get(key) ?? 0) + 1);
  }
  let backgroundKey = 0;
  let backgroundCount = 0;
  for (const [key, count] of bins) {
    if (count > backgroundCount) {
      backgroundKey = key;
      backgroundCount = count;
    }
  }
  const background = [
    ((backgroundKey >> 10) & 31) << 5,
    ((backgroundKey >> 5) & 31) << 5,
    (backgroundKey & 31) << 5,
  ];

  const columnWidth = width / GRID_COLUMNS;
  const rowHeight = height / GRID_ROWS;
  const cellContent = Array.from({length: GRID_ROWS}, () => new Array(GRID_COLUMNS).fill(0));
  let contentPixels = 0;
  let minX = width;
  let maxX = -1;
  let minY = height;
  let maxY = -1;
  for (let y = 0; y < height; y += 1) {
    const gridRow = Math.min(GRID_ROWS - 1, Math.floor(y / rowHeight));
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * channels;
      const difference = Math.max(
        Math.abs(data[offset] - background[0]),
        Math.abs(data[offset + 1] - background[1]),
        Math.abs(data[offset + 2] - background[2]),
      );
      if (difference <= BACKGROUND_DIFFERENCE_THRESHOLD) continue;
      contentPixels += 1;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
      cellContent[gridRow][Math.min(GRID_COLUMNS - 1, Math.floor(x / columnWidth))] += 1;
    }
  }

  const cellTotal = columnWidth * rowHeight;
  return {
    background,
    cells: cellContent.map((row) => row.map((content) => content / cellTotal)),
    totalCoverage: contentPixels / (width * height),
    bbox: maxX < 0 ? null : {
      width: (maxX - minX + 1) / width,
      height: (maxY - minY + 1) / height,
    },
  };
};

const findViolations = (analysis) => {
  const violations = [];
  if (analysis.totalCoverage < MIN_TOTAL_COVERAGE) {
    violations.push(`only ${(analysis.totalCoverage * 100).toFixed(1)}% of the usable frame carries content`);
  }
  for (let row = 0; row + 1 < GRID_ROWS; row += 1) {
    for (let column = 0; column + 1 < GRID_COLUMNS; column += 1) {
      const block = [
        analysis.cells[row][column],
        analysis.cells[row][column + 1],
        analysis.cells[row + 1][column],
        analysis.cells[row + 1][column + 1],
      ];
      if (block.every((value) => value < EMPTY_CELL_COVERAGE)) {
        violations.push(`a 2x2 region (columns ${column}-${column + 1}, rows ${row}-${row + 1} of the ${GRID_COLUMNS}x${GRID_ROWS} grid) is empty`);
      }
    }
  }
  for (let row = 0; row < GRID_ROWS; row += 1) {
    if (analysis.cells[row].every((value) => value < EMPTY_CELL_COVERAGE)) {
      violations.push(`the full horizontal band at grid row ${row} is empty`);
    }
  }
  if (analysis.bbox) {
    if (analysis.bbox.width < MIN_BBOX_WIDTH) violations.push(`content spans only ${Math.round(analysis.bbox.width * 100)}% of the frame width`);
    if (analysis.bbox.height < MIN_BBOX_HEIGHT) violations.push(`content spans only ${Math.round(analysis.bbox.height * 100)}% of the frame height`);
  }
  return violations;
};

const stableFrameFiles = async (runDirectory) => {
  const entries = await readdir(runDirectory);
  const manifest = JSON.parse(await readFile(path.join(runDirectory, 'manifest.json'), 'utf8'));
  const pageByFile = new Map(manifest.pages.map((page) => [page.file, page]));
  return entries
    .filter((entry) => entry.endsWith('.png') && pageByFile.has(entry))
    .filter((file) => (manifest.mode === 'motion' ? file.endsWith('-final.png') : true))
    .sort()
    .map((file) => ({file, page: pageByFile.get(file)}));
};

export const auditStableFrames = async (runDirectory, controlSafeBottom = DEFAULT_CONTROL_SAFE_BOTTOM) => {
  const manifest = JSON.parse(await readFile(path.join(runDirectory, 'manifest.json'), 'utf8'));
  const targets = await stableFrameFiles(runDirectory);
  const failures = [];
  const lines = [];
  for (const {file, page} of targets) {
    const filePath = path.join(runDirectory, file);
    const metadata = await sharp(filePath).metadata();
    const usableHeight = Math.max(1, metadata.height - controlSafeBottom);
    const resized = await sharp(filePath)
      .extract({left: 0, top: 0, width: metadata.width, height: usableHeight})
      .resize(ANALYSIS_WIDTH, Math.max(1, Math.round((ANALYSIS_WIDTH * usableHeight) / metadata.width)))
      .removeAlpha()
      .raw()
      .toBuffer({resolveWithObject: true});
    const analysis = measureCoverage(resized.data, resized.info);
    lines.push(`UTIL ${manifest.animationId}/${page.key}: coverage ${(analysis.totalCoverage * 100).toFixed(1)}%, bbox ${analysis.bbox ? `${Math.round(analysis.bbox.width * 100)}x${Math.round(analysis.bbox.height * 100)}%` : 'none'}`);
    const violations = findViolations(analysis);
    if (violations.length > 0) failures.push({animationId: manifest.animationId, file, key: page.key, violations});
  }
  return {failures, lines};
};

const resolveControlSafeBottom = async (animationId) => {
  const stack = [ANIMATIONS_ROOT];
  while (stack.length > 0) {
    const directory = stack.pop();
    for (const entry of await readdir(directory, {withFileTypes: true})) {
      if (!entry.isDirectory()) continue;
      const candidate = path.join(directory, entry.name);
      if (entry.name === animationId) {
        const contractPath = path.join(candidate, 'visual-structure.json');
        try {
          const contract = JSON.parse(await readFile(contractPath, 'utf8'));
          return Number.isFinite(contract.playerControlSafeBottom) ? contract.playerControlSafeBottom : DEFAULT_CONTROL_SAFE_BOTTOM;
        } catch {
          return DEFAULT_CONTROL_SAFE_BOTTOM;
        }
      }
      stack.push(candidate);
    }
  }
  return DEFAULT_CONTROL_SAFE_BOTTOM;
};

const main = async () => {
  const runDirectory = process.argv[2];
  if (!runDirectory) throw new Error('Usage: node scripts/audit-canvas-utilization.mjs <run-directory>');
  const manifest = JSON.parse(await readFile(path.join(runDirectory, 'manifest.json'), 'utf8'));
  const controlSafeBottom = await resolveControlSafeBottom(manifest.animationId);
  const {failures, lines} = await auditStableFrames(runDirectory, controlSafeBottom);
  for (const line of lines) console.log(line);
  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(`CANVAS ${failure.file}: ${failure.violations.join('; ')}`);
    }
    process.exitCode = 1;
  }
};

const isMainModule = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMainModule) {
  await main();
}
