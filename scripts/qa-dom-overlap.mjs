/* eslint-disable no-console */
// DOM occlusion audit: load each scene's stable frame in a real browser, walk the
// rendered leaf elements, and reject frames where one element covers another
// text-bearing element (panel stacked on panel, header over a row, icon over text).
// Low-opacity decoration (watermark totems) is excluded.
//
// Usage:
//   import {auditSceneOverlaps, startStaticServer} from './qa-dom-overlap.mjs'
//   node scripts/qa-dom-overlap.mjs <animation-id>     (bundle + audit one node)

import {homedir} from 'node:os';
import path from 'node:path';
import {stat} from 'node:fs/promises';

const fileExists = async (filePath) => {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
};

const findBrowserExecutable = async () => {
  const homeDirectory = homedir();
  const candidates = [
    process.env.REMOTION_BROWSER_EXECUTABLE,
    ...(process.platform === 'win32'
      ? [
          'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
          'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
          path.join(homeDirectory, 'AppData', 'Local', 'Google', 'Chrome', 'Application', 'chrome.exe'),
          path.join(homeDirectory, 'AppData', 'Local', 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
        ]
      : process.platform === 'darwin'
        ? [
            '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
          ]
        : ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge']),
  ].filter(Boolean);
  for (const candidate of candidates) {
    if (await fileExists(candidate)) return candidate;
  }
  return null;
};

const PAGE_SETTLE_MS = 700;
const MIN_TEXT_OVERLAP_RATIO = 0.3;
const MIN_ICON_OVER_TEXT_RATIO = 0.45;
const MIN_OPACITY = 0.35;

const CONTENT_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.avif': 'image/avif',
};

const startStaticServer = async (rootDirectory) => {
  const http = await import('node:http');
  const {promises: fsPromises} = await import('node:fs');
  const path = await import('node:path');
  const server = http.default.createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url ?? '/', 'http://localhost');
      const relative = decodeURIComponent(requestUrl.pathname) === '/' ? '/index.html' : decodeURIComponent(requestUrl.pathname);
      const file = path.join(rootDirectory, relative);
      if (!file.startsWith(rootDirectory)) throw new Error('outside root');
      const data = await fsPromises.readFile(file);
      response.writeHead(200, {'content-type': CONTENT_TYPES[path.extname(file).toLowerCase()] ?? 'application/octet-stream'});
      response.end(data);
    } catch {
      response.writeHead(404);
      response.end('not found');
    }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  return {url: `http://127.0.0.1:${port}/`, close: () => new Promise((resolve) => server.close(resolve))};
};

const collectOverlapsInPage = () => {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  const effectiveOpacity = (element) => {
    let opacity = 1;
    for (let node = element; node && node.nodeType === 1; node = node.parentElement) {
      opacity *= Number.parseFloat(window.getComputedStyle(node).opacity || '1');
      if (opacity < 0.01) return 0;
    }
    return opacity;
  };
  const leaves = [];
  for (const element of document.body.querySelectorAll('*')) {
    if (element.children.length > 0) continue;
    const style = window.getComputedStyle(element);
    if (style.display === 'none' || style.visibility === 'hidden') continue;
    if (effectiveOpacity(element) < 0.35) continue;
    const rect = element.getBoundingClientRect();
    if (rect.width < 4 || rect.height < 4) continue;
    if (rect.bottom <= 0 || rect.right <= 0 || rect.top >= canvasHeight || rect.left >= canvasWidth) continue;
    const text = (element.textContent ?? '').trim();
    const hasSvg = element.tagName.toLowerCase() === 'svg' || !!element.querySelector('svg');
    if (!text && !hasSvg) continue;
    leaves.push({
      bottom: rect.bottom, hasSvg, height: rect.height,
      left: rect.left, right: rect.right, text: text.slice(0, 24), textLength: text.length, top: rect.top,
      width: rect.width,
    });
  }
  const overlaps = [];
  for (let i = 0; i < leaves.length; i += 1) {
    for (let j = i + 1; j < leaves.length; j += 1) {
      const a = leaves[i];
      const b = leaves[j];
      const intersectionX = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
      const intersectionY = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
      if (intersectionX <= 2 || intersectionY <= 2) continue;
      const intersectionArea = intersectionX * intersectionY;
      const minArea = Math.min(a.width * a.height, b.width * b.height);
      if (minArea <= 0) continue;
      const ratio = intersectionArea / minArea;
      if (ratio < 0.3) continue;
      if (a.hasSvg && b.hasSvg && !a.textLength && !b.textLength) continue;
      if ((a.textLength > 0) !== (b.textLength > 0)) {
        const textElement = a.textLength > 0 ? a : b;
        const textArea = textElement.width * textElement.height;
        if (textArea <= 0 || intersectionArea / textArea < 0.45) continue;
      }
      overlaps.push({
        pair: `"${a.textLength ? a.text : '[图形]'}" × "${b.textLength ? b.text : '[图形]'}"`,
        ratio: Math.round(ratio * 100),
      });
    }
  }
  return {debug: window.__occlDebug ? leaves : undefined, leafCount: leaves.length, overlaps};
};

const waitForRenderReady = async (page, timeoutInMilliseconds, description) => {
  const deadline = Date.now() + timeoutInMilliseconds;
  for (;;) {
    const state = await page.evaluate(() => ({
      cancelled: typeof window.remotion_cancelledError === 'string' ? window.remotion_cancelledError : null,
      ready: window.remotion_renderReady === true,
    }));
    if (state.cancelled) throw new Error(`Render cancelled while waiting for ${description}: ${state.cancelled}`);
    if (state.ready) return;
    if (Date.now() > deadline) throw new Error(`Timed out waiting for ${description}`);
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
};

const waitForBootstrap = async (page, timeoutInMilliseconds) => {
  const deadline = Date.now() + timeoutInMilliseconds;
  for (;;) {
    const state = await page.evaluate(() => ({
      bootstrap: typeof window.remotion_setBundleMode === 'function',
      cancelled: typeof window.remotion_cancelledError === 'string' ? window.remotion_cancelledError : null,
    }));
    if (state.bootstrap) return;
    if (state.cancelled) throw new Error(`Render cancelled during bootstrap: ${state.cancelled}`);
    if (Date.now() > deadline) throw new Error('Timed out waiting for the Remotion bundle bootstrap');
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
};

export const auditSceneOverlaps = async ({browser, serveUrl, composition, frameTargets, timeoutInMilliseconds = 90000}) => {
  const server = serveUrl.toLowerCase().startsWith('http') ? null : await startStaticServer(serveUrl);
  const pageUrl = server ? server.url : serveUrl;
  const page = await browser.newPage({context: null, indent: 0, logLevel: 'error', pageIndex: 0});
  const lines = [];
  const failures = [];
  try {
    await page.setViewport({deviceScaleFactor: 1, height: composition.height, width: composition.width});
    await page.evaluateOnNewDocument((props, debug) => {
      window.remotion_inputProps = props;
      window.remotion_audioEnabled = false;
      window.remotion_videoEnabled = true;
      window.remotion_logLevel = 'error';
      window.remotion_attempt = 1;
      window.__occlDebug = debug;
      if (window.process === undefined) window.process = {};
      if (window.process.env === undefined) window.process.env = {};
      window.process.env.NODE_ENV = 'production';
    }, JSON.stringify(composition.auditInputProps ?? {}), Boolean(process.env.DEBUG_OCCL));
    await page.goto({timeout: timeoutInMilliseconds, url: pageUrl});
    await waitForBootstrap(page, timeoutInMilliseconds);
    await page.evaluate((spec) => {
      window.remotion_setBundleMode({
        compositionDefaultCodec: null,
        compositionDefaultOutName: null,
        compositionDefaultPixelFormat: null,
        compositionDefaultProResProfile: null,
        compositionDefaultSampleRate: null,
        compositionDefaultVideoImageFormat: null,
        compositionDurationInFrames: spec.durationInFrames,
        compositionFps: spec.fps,
        compositionHeight: spec.height,
        compositionName: spec.id,
        compositionWidth: spec.width,
        serializedResolvedPropsWithSchema: spec.serializedProps,
        type: 'composition',
      });
    }, {
      durationInFrames: composition.durationInFrames,
      fps: composition.fps,
      height: composition.height,
      id: composition.id,
      serializedProps: JSON.stringify(composition.auditInputProps ?? {}),
      width: composition.width,
    });
    for (const target of frameTargets) {
      await waitForRenderReady(page, timeoutInMilliseconds, `frame ${target.frame}`);
      await page.evaluate((spec) => window.remotion_setFrame(spec.frame, spec.compositionId, 1), {compositionId: composition.id, frame: target.frame});
      await waitForRenderReady(page, timeoutInMilliseconds, `frame ${target.frame} after seek`);
      await page.evaluate(async () => {
        await document.fonts.ready;
      });
      await new Promise((resolve) => setTimeout(resolve, PAGE_SETTLE_MS));
      const result = await page.evaluate(collectOverlapsInPage);
      const line = `DOMOCCL ${target.label}: ${result.leafCount} leaf elements, ${result.overlaps.length} overlapping pair(s)`;
      lines.push(line);
      if (process.env.DEBUG_OCCL && result.debug) {
        for (const leaf of result.debug) {
          console.log(`  LEAF ${target.label} [${Math.round(leaf.left)},${Math.round(leaf.top)} ${Math.round(leaf.width)}x${Math.round(leaf.height)}] ${leaf.hasSvg && !leaf.textLength ? '[图形]' : leaf.text}`);
        }
      }
      if (result.overlaps.length > 0) {
        failures.push({label: target.label, overlaps: result.overlaps});
      }
    }
  } finally {
    await page.close().catch(() => undefined);
    if (server) await server.close();
  }
  return {failures, lines};
};

const MOTION_CHECKPOINT_RATIOS = (process.env.OCCL_RATIOS ?? "0.15,0.3,0.45,0.6,0.75,0.9").split(",").map((value) => Number(value));

export const buildFrameTargets = (storyboardOrScenes, durationInFrames) => {
  const entries = Array.isArray(storyboardOrScenes)
    ? storyboardOrScenes.map((scene) => [scene.key, scene])
    : Object.entries(storyboardOrScenes.SCENES ?? {});
  const frameTargets = [];
  entries.forEach(([key, scene], index) => {
    const prefix = `${String(index + 1).padStart(2, '0')}/${key}`;
    const finalFrame = Math.min(durationInFrames - 1, scene.start + scene.duration - 1 - scene.previewEndTrimFrames);
    frameTargets.push({frame: finalFrame, label: `${prefix}@final`, motion: false});
    for (const ratio of MOTION_CHECKPOINT_RATIOS) {
      frameTargets.push({
        frame: Math.min(durationInFrames - 1, scene.start + Math.floor((scene.duration - 1) * ratio)),
        label: `${prefix}@${String(Math.round(ratio * 100)).padStart(2, '0')}`,
        motion: true,
      });
    }
  });
  return frameTargets;
};

const main = async () => {
  const animationId = process.argv[2];
  if (!animationId) throw new Error('Usage: node scripts/qa-dom-overlap.mjs <animation-id>');
  const {readFile} = await import('node:fs/promises');
  const {pathToFileURL} = await import('node:url');
  const projectRoot = path.resolve(import.meta.dirname, '..');
  const animationDirectories = [];
  const walk = async (directory, depth = 0) => {
    const {readdirSync} = await import('node:fs');
    for (const entry of readdirSync(directory, {withFileTypes: true})) {
      if (!entry.isDirectory() || entry.name === 'shared') continue;
      const candidate = path.join(directory, entry.name);
      if (await fileExists(path.join(candidate, 'remotion', 'storyboard.ts'))) {
        if (entry.name === animationId) animationDirectories.push(candidate);
        continue;
      }
      if (depth < 4) await walk(candidate, depth + 1);
    }
  };
  await walk(path.join(projectRoot, 'src', 'animations'));
  const animationDirectory = animationDirectories[0];
  if (!animationDirectory) throw new Error(`Animation not found: ${animationId}`);
  const {bundle} = await import('@remotion/bundler');
  const {getCompositions, openBrowser} = await import('@remotion/renderer');
  const {mkdtemp} = await import('node:fs/promises');
  const {tmpdir} = await import('node:os');
  const {withInkLoomTailwind} = await import('./remotion-webpack.mjs');
  const bundleDirectory = await mkdtemp(path.join(tmpdir(), `inkloom-occl-${animationId}-`));
  const serveUrl = await bundle({
    entryPoint: path.join(animationDirectory, 'remotion', 'index.ts'),
    outDir: bundleDirectory,
    publicDir: path.join(projectRoot, 'public'),
    rootDir: projectRoot,
    webpackOverride: withInkLoomTailwind,
    onProgress: () => undefined,
  });
  const browserExecutable = await findBrowserExecutable();
  const browser = await openBrowser('chrome', {browserExecutable, chromiumOptions: {headless: true}, logLevel: 'error'});
  try {
    const compositions = await getCompositions(serveUrl, {puppeteerInstance: browser});
    const deckId = animationId.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    const composition = compositions.find((item) => item.id === deckId)
      ?? compositions.find((item) => !item.id.includes('-'))
      ?? [...compositions].sort((a, b) => b.durationInFrames - a.durationInFrames)[0];
    const storyboardUrl = `${pathToFileURL(path.join(animationDirectory, 'remotion', 'storyboard.ts')).href}?capture=${Date.now()}`;
    const storyboard = await import(storyboardUrl);
    const frameTargets = buildFrameTargets(storyboard, composition.durationInFrames);
    const {failures, lines} = await auditSceneOverlaps({browser, composition, frameTargets, serveUrl});
    for (const line of lines) console.log(line);
    if (failures.length > 0) {
      for (const failure of failures) {
        console.error(`OCCLUSION ${animationId}/${failure.label}: ${failure.overlaps.map((overlap) => `${overlap.pair} (${overlap.ratio}%)`).join('; ')}`);
      }
      process.exitCode = 1;
    }
  } finally {
    await browser.close({silent: true});
  }
};

if (process.argv[1] && import.meta.url === (await import('node:url')).pathToFileURL(process.argv[1]).href) {
  await main();
}
