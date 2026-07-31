/* eslint-disable no-console */
// QA helper: verify expected semantic colors appear in expected regions of captured pages.
// Usage: node scripts/qa-pixel-check.mjs
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const ARTIFACTS = path.join(ROOT, '.artifacts');

const near = (r, g, b, target, tol = 40) =>
  Math.abs(r - target[0]) <= tol && Math.abs(g - target[1]) <= tol && Math.abs(b - target[2]) <= tol;

const sample = async (file, regions) => {
  const img = sharp(file);
  const meta = await img.metadata();
  const {data, info} = await img.raw().toBuffer({resolveWithObject: true});
  const {width, height, channels} = info;
  const at = (x, y) => {
    const i = (y * width + x) * channels;
    return [data[i], data[i + 1], data[i + 2]];
  };
  const results = {blank: true, regions: {}, edges: []};

  // global blankness: sample grid of pixels, compute luminance variance
  let sum = 0;
  let sumSq = 0;
  const samples = [];
  for (let y = 0; y < height; y += 40) {
    for (let x = 0; x < width; x += 40) {
      const [r, g, b] = at(x, y);
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      samples.push(lum);
      sum += lum;
      sumSq += lum * lum;
    }
  }
  const n = samples.length;
  const mean = sum / n;
  results.blank = Math.sqrt(Math.max(0, sumSq / n - mean * mean)) < 6;

  // edge-clipping check: outer 24px ring should match the background (no clipped content)
  const edgeBands = [
    {name: 'top', x0: 24, y0: 0, x1: width - 24, y1: 24},
    {name: 'bottom', x0: 24, y0: height - 24, x1: width - 24, y1: height},
    {name: 'left', x0: 0, y0: 24, x1: 24, y1: height - 24},
    {name: 'right', x0: width - 24, y0: 24, x1: width, y1: height - 24},
  ];
  for (const band of edgeBands) {
    let hits = 0;
    let total = 0;
    for (let y = band.y0; y < band.y1; y += 4) {
      for (let x = band.x0; x < band.x1; x += 4) {
        const c = at(x, y);
        total += 1;
        if (!near(c[0], c[1], c[2], [244, 237, 223], 26) && !near(c[0], c[1], c[2], [231, 235, 239], 26)) hits += 1;
      }
    }
    const frac = total === 0 ? 0 : hits / total;
    results.edges.push({name: band.name, frac, pass: frac < 0.01});
  }

  for (const [name, region] of Object.entries(regions)) {
    const {x0, y0, x1, y1, color, tol = 40, minFrac = 0.02} = region;
    const sx0 = Math.max(0, Math.round(x0));
    const sy0 = Math.max(0, Math.round(y0));
    const sx1 = Math.min(width, Math.round(x1));
    const sy1 = Math.min(height, Math.round(y1));
    let hit = 0;
    let total = 0;
    for (let y = sy0; y < sy1; y += 6) {
      for (let x = sx0; x < sx1; x += 6) {
        total += 1;
        if (near(at(x, y)[0], at(x, y)[1], at(x, y)[2], color, tol)) hit += 1;
      }
    }
    const frac = total === 0 ? 0 : hit / total;
    results.regions[name] = {frac, pass: frac >= minFrac};
  }
  return results;
};

const P = {
  teal: [30, 122, 107],
  amber: [201, 138, 45],
  red: [194, 59, 46],
  ink: [55, 51, 43],
  seal: [214, 69, 65],
  mint: [46, 139, 123],
  cobaltInk: [38, 55, 74],
};

const dirStat = 'animation-pages/statutory-agent/2026-07-31T14-24-01-228Z';
const dirDel = 'animation-pages/delegated-agent/2026-07-31T14-29-17-486Z';

const checks = [
  {file: `${dirStat}/page-01-definition.png`, name: 'stat-01-definition', regions: {
    guardianTeal: {x0: 720, y0: 400, x1: 1190, y1: 560, color: P.teal},
    wardAmber: {x0: 1330, y0: 400, x1: 1790, y1: 560, color: P.amber},
    verdictDark: {x0: 400, y0: 806, x1: 1520, y1: 900, color: P.ink},
  }},
  {file: `${dirStat}/page-02-differences.png`, name: 'stat-02-differences', regions: {
    partyAmber: {x0: 120, y0: 430, x1: 500, y1: 590, color: P.amber},
    row1Red: {x0: 640, y0: 290, x1: 800, y1: 430, color: P.red},
    row3Red: {x0: 640, y0: 650, x1: 800, y1: 790, color: P.red},
    verdictDark: {x0: 400, y0: 856, x1: 1520, y1: 940, color: P.ink},
  }},
  {file: `${dirStat}/page-03-deathEvent.png`, name: 'stat-03-death-event', regions: {
    tokenRed: {x0: 790, y0: 250, x1: 1130, y1: 360, color: P.red},
    branchARed: {x0: 240, y0: 500, x1: 540, y1: 650, color: P.red},
    branchBTeal: {x0: 1380, y0: 500, x1: 1680, y1: 650, color: P.teal},
    verdictDark: {x0: 450, y0: 884, x1: 1470, y1: 970, color: P.ink},
  }},
  {file: `${dirDel}/page-01-scope.png`, name: 'del-01-scope', regions: {
    leftMint: {x0: 280, y0: 394, x1: 962, y1: 470, color: P.mint},
    rightRed: {x0: 998, y0: 394, x1: 1680, y1: 470, color: P.red},
    verdictDark: {x0: 380, y0: 884, x1: 1540, y1: 970, color: P.cobaltInk},
  }},
  {file: `${dirDel}/page-02-fullPowerTrap.png`, name: 'del-02-trap', regions: {
    seal: {x0: 750, y0: 450, x1: 962, y1: 662, color: P.seal, minFrac: 0.05},
    paper: {x0: 300, y0: 400, x1: 600, y1: 500, color: [246, 248, 250], tol: 12, minFrac: 0.5},
    verdictDark: {x0: 380, y0: 884, x1: 1540, y1: 970, color: P.cobaltInk},
  }},
  {file: `${dirDel}/page-03-executionStage.png`, name: 'del-03-stage', regions: {
    gateRed: {x0: 930, y0: 340, x1: 1026, y1: 620, color: P.red},
    mintBadge: {x0: 220, y0: 420, x1: 720, y1: 590, color: P.mint},
    verdictDark: {x0: 380, y0: 884, x1: 1540, y1: 970, color: P.cobaltInk},
  }},
  {file: `${dirDel}/page-04-divorceDuty.png`, name: 'del-04-duty', regions: {
    exceptionMint: {x0: 340, y0: 640, x1: 900, y1: 810, color: P.mint},
    dutyRed: {x0: 920, y0: 390, x1: 1400, y1: 550, color: P.red},
    verdictDark: {x0: 400, y0: 884, x1: 1520, y1: 970, color: P.cobaltInk},
  }},
];

let failures = 0;
for (const check of checks) {
  const result = await sample(path.join(ROOT, '.artifacts', check.file), check.regions);
  const lines = [`${check.name}: blank=${result.blank}`];
  for (const [name, r] of Object.entries(result.regions)) {
    lines.push(`  ${name}: frac=${r.frac.toFixed(3)} ${r.pass ? 'PASS' : 'FAIL'}`);
    if (!r.pass) failures += 1;
  }
  for (const edge of result.edges) {
    lines.push(`  edge-${edge.name}: frac=${edge.frac.toFixed(4)} ${edge.pass ? 'PASS' : 'FAIL'}`);
    if (!edge.pass) failures += 1;
  }
  if (result.blank) failures += 1;
  console.log(lines.join('\n'));
}
console.log(failures === 0 ? '\nALL CHECKS PASS' : `\n${failures} FAILURES`);
process.exitCode = failures === 0 ? 0 : 1;
