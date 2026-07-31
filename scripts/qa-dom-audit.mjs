/* eslint-disable no-console */
// DOM layout audit: open Remotion Studio previews and check for overflowing / overlapping elements.
// Usage: node scripts/qa-dom-audit.mjs
import {openBrowser} from '@remotion/renderer';

const BASE = 'http://localhost:3000';
const COMPOSITIONS = ['StatutoryAgent', 'DelegatedAgent'];
const FRAME = 245;

const audit = async (page, label) => {
  await page.waitForSelector('iframe', {timeout: 30000}).catch(() => null);
  await new Promise((resolve) => setTimeout(resolve, 6000));
  const result = await page.evaluate(() => {
    const doc = document;
    // find the preview iframe
    const frames = Array.from(doc.querySelectorAll('iframe'));
    const target = frames[frames.length - 1];
    if (!target) return {error: 'no iframe'};
    const inner = target.contentDocument ?? target.contentWindow?.document;
    if (!inner) return {error: 'no inner doc'};
    const all = inner.querySelectorAll('*');
    const elements = [];
    const canvasW = 1920;
    const canvasH = 1080;
    for (const el of all) {
      if (el.children.length > 0) continue; // leaf elements only
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;
      const text = (el.textContent ?? '').trim();
      if (!text && !el.querySelector('svg')) continue;
      elements.push({
        text: text.slice(0, 40),
        x: Math.round(rect.left),
        y: Math.round(rect.top),
        w: Math.round(rect.width),
        h: Math.round(rect.height),
        tag: el.tagName,
      });
    }
    const clipped = elements.filter((e) => e.x < -2 || e.y < -2 || e.x + e.w > canvasW + 2 || e.y + e.h > canvasH + 2);
    // pairwise overlap of text elements
    const overlaps = [];
    for (let i = 0; i < elements.length; i += 1) {
      for (let j = i + 1; j < elements.length; j += 1) {
        const a = elements[i];
        const b = elements[j];
        const ix = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
        const iy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
        if (ix > 20 && iy > 20) {
          const area = ix * iy;
          const minArea = Math.min(a.w * a.h, b.w * b.h);
          if (minArea > 0 && area / minArea > 0.35) {
            overlaps.push({a: `${a.text} [${a.x},${a.y},${a.w}x${a.h}]`, b: `${b.text} [${b.x},${b.y},${b.w}x${b.h}]`, overlap: Math.round(area / (a.w * a.h) * 100)});
          }
        }
      }
    }
    return {count: elements.length, clipped, overlaps: overlaps.slice(0, 30)};
  });
  console.log(`\n=== ${label} ===`);
  if (result.error) {
    console.log('ERROR:', result.error);
    return;
  }
  console.log(`elements: ${result.count}`);
  if (result.clipped.length === 0) console.log('clipped: NONE');
  else {
    console.log('clipped:');
    for (const c of result.clipped) console.log('  ', JSON.stringify(c));
  }
  if (result.overlaps.length === 0) console.log('overlaps: NONE');
  else {
    console.log('overlaps:');
    for (const o of result.overlaps) console.log('  ', JSON.stringify(o));
  }
};

const main = async () => {
  const browser = await openBrowser('chrome', {
    browserExecutable: 'C:\\Users\\30902\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe',
    chromiumOptions: {headless: true},
    logLevel: 'error',
  });
  try {
    for (const comp of COMPOSITIONS) {
      const page = await browser.newPage();
      await page.setViewport({width: 1600, height: 900});
      const url = `${BASE}/${comp}`;
      await page.goto(url, {waitUntil: 'networkidle2', timeout: 90000});
      await page.evaluate((frame) => {
        // try to seek via studio store if exposed
        if (window.__remotion_public_api__) window.__remotion_public_api__.seek(frame);
      }, FRAME).catch(() => undefined);
      await audit(page, comp);
      await page.close();
    }
  } finally {
    await browser.close({silent: true});
  }
};

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
