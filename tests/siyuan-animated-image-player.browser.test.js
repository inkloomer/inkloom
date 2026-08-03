import {userEvent} from 'vitest/browser';
import {afterEach, beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';

const TEST_IMAGE = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="320" height="180">
    <rect width="320" height="180" fill="#245b4a"/>
  </svg>
`)}`;

const wait = (durationMs) => new Promise((resolve) => window.setTimeout(resolve, durationMs));
let playerSource;

beforeAll(async () => {
  const response = await fetch('/tools/siyuan-animated-image-player.js');
  playerSource = await response.text();
});

const setupPlayer = async (imageCount = 1) => {
  document.body.innerHTML = Array.from({length: imageCount}, (_, index) => `
    <img
      alt="Animation ${index + 1}"
      data-inkloom-animated-type="avif"
      data-testid="image-${index + 1}"
      src="${TEST_IMAGE}"
      style="display:block;width:320px;height:180px"
    >
  `).join('');
  await Promise.all([...document.images].map((img) => img.decode()));
  document.head.appendChild(Object.assign(document.createElement('script'), {textContent: playerSource}));
  await vi.waitFor(() => {
    expect(document.querySelectorAll('button[aria-label="\u91cd\u65b0\u64ad\u653e"]')).toHaveLength(imageCount);
  });
  return [...document.images];
};

const replayButtons = () => [...document.querySelectorAll('button[aria-label="\u91cd\u65b0\u64ad\u653e"]')];

afterEach(() => {
  window.__inkloomAnimatedImagePlayer?.dispose?.();
  document.body.innerHTML = '';
  vi.restoreAllMocks();
});

describe('SiYuan animated image player', () => {
  beforeEach(() => {
    vi.spyOn(document, 'hasFocus').mockReturnValue(true);
  });

  test('requires an intentional hover and cancels a brief pass', async () => {
    const [img] = await setupPlayer();
    const originalSrc = img.getAttribute('src');

    await userEvent.hover(img);
    await wait(200);
    await userEvent.unhover(img);
    await wait(700);
    expect(img.getAttribute('src')).toBe(originalSrc);

    await userEvent.hover(img);
    await vi.waitFor(() => expect(img.getAttribute('src')).toMatch(/^blob:/), {timeout: 2000});
  });

  test('freezes every controlled image after initial setup', async () => {
    await setupPlayer(3);

    await vi.waitFor(() => {
      const overlays = [...document.querySelectorAll('.inkloom-animated-image-overlay')];
      expect(overlays).toHaveLength(3);
      expect(overlays.every((overlay) => overlay.querySelector('canvas:not([hidden])'))).toBe(true);
    });
    expect([...document.images].every((img) => !img.src.startsWith('blob:'))).toBe(true);
    expect([...document.images].every((img) => img.style.visibility === '')).toBe(true);
  });

  test('does not restart the same image from hover while it is replaying', async () => {
    const [img] = await setupPlayer();
    await userEvent.click(replayButtons()[0]);
    await vi.waitFor(() => expect(img.getAttribute('src')).toMatch(/^blob:/));
    const activeReplaySrc = img.getAttribute('src');

    await userEvent.hover(img);
    await wait(800);
    expect(img.getAttribute('src')).toBe(activeReplaySrc);
  });

  test('freezes the previous image when another image starts replaying', async () => {
    const [firstImage, secondImage] = await setupPlayer(2);
    const [firstButton, secondButton] = replayButtons();

    await userEvent.click(firstButton);
    await vi.waitFor(() => expect(firstImage.getAttribute('src')).toMatch(/^blob:/));
    await userEvent.click(secondButton);
    await vi.waitFor(() => expect(secondImage.getAttribute('src')).toMatch(/^blob:/));

    const overlays = [...document.querySelectorAll('.inkloom-animated-image-overlay')];
    expect(overlays[0].querySelector('canvas:not([hidden])')).not.toBeNull();
    expect(overlays[1].querySelector('canvas:not([hidden])')).toBeNull();
  });

  test('reuses the fetched media blob across explicit replays', async () => {
    const fetchSpy = vi.spyOn(window, 'fetch');
    const [img] = await setupPlayer();
    const [button] = replayButtons();

    await userEvent.click(button);
    await vi.waitFor(() => expect(img.getAttribute('src')).toMatch(/^blob:/));
    const firstReplaySrc = img.getAttribute('src');
    await userEvent.click(button);
    await vi.waitFor(() => expect(img.getAttribute('src')).not.toBe(firstReplaySrc));

    expect(fetchSpy.mock.calls.filter(([source]) => source === TEST_IMAGE)).toHaveLength(1);
  });

  test('cancels hover replay across blur and focus restoration', async () => {
    const [img] = await setupPlayer();
    const originalSrc = img.getAttribute('src');

    await userEvent.hover(img);
    await wait(200);
    window.dispatchEvent(new Event('blur'));
    window.dispatchEvent(new Event('focus'));
    await wait(800);
    expect(img.getAttribute('src')).toBe(originalSrc);
    await vi.waitFor(() => expect(img.getAttribute('src')).toMatch(/^blob:/), {timeout: 1000});
  });

  test('scans only newly added DOM branches after initial setup', async () => {
    const documentQuery = vi.spyOn(document, 'querySelectorAll');
    await setupPlayer();
    documentQuery.mockClear();

    document.body.appendChild(document.createElement('div'));
    await wait(50);
    expect(documentQuery).not.toHaveBeenCalledWith('img');
  });
});
