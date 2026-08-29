export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 43.5;

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
  foreignTradeLaw: slowScene(0, 420),
  exportControl: slowScene(420, 390),
  dumpingConditions: slowScene(810, 420),
  remedyProcedure: slowScene(1230, 480),
  subsidySafeguard: slowScene(1710, 420),
  remedyComparison: slowScene(2130, 480),
} as const;

export const PALETTE = {
  sand: '#F0E3CE',
  panel: '#F7EFDF',
  ink: '#4A2E1D',
  paperText: '#4A2E1D',
  muted: '#8A7156',
  line: '#CBB894',
  azurite: '#3A6B8C',
  azuriteSoft: 'rgba(58,107,140,0.14)',
  malachite: '#4A7C59',
  malachiteSoft: 'rgba(74,124,89,0.14)',
  cinnabar: '#C0392B',
  cinnabarSoft: 'rgba(192,57,43,0.12)',
} as const;
