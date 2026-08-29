export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 32;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const PREVIEW_EXIT_TRIM_FRAMES = toPlaybackFrames(0);
const slowScene = (start: number, duration: number) => ({
  start: toPlaybackFrames(start),
  duration: toPlaybackFrames(duration),
  previewEndTrimFrames: PREVIEW_EXIT_TRIM_FRAMES,
});

export const DURATION_FRAMES = toPlaybackFrames(SOURCE_DURATION_SECONDS * FPS);
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

export const SCENES = {
  nationality: slowScene(0, 420),
  entryExit: slowScene(420, 450),
  extraditionRefusal: slowScene(870, 330),
  extraditionProcess: slowScene(1200, 360),
  protectionAsylum: slowScene(1560, 360),
} as const;

export const PALETTE = {
  ledger: '#E8EEE6',
  card: '#F6F8F3',
  ink: '#26302B',
  paperText: '#26302B',
  muted: '#6E7B72',
  line: '#C3CFC4',
  jade: '#2E7D5B',
  jadeSoft: 'rgba(46,125,91,0.14)',
  blue: '#3A6B9C',
  blueSoft: 'rgba(58,107,156,0.14)',
  pink: '#C25E6E',
  pinkSoft: 'rgba(194,94,110,0.14)',
} as const;
