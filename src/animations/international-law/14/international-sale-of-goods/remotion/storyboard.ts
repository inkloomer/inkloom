export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 37;

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
  termsCarriers: slowScene(0, 480),
  termsLadder: slowScene(480, 450),
  cisgScope: slowScene(930, 420),
  dutiesLedgers: slowScene(1350, 540),
  riskTimeline: slowScene(1890, 330),
} as const;

export const PALETTE = {
  concrete: '#E7E2D5',
  panel: '#F6F3EA',
  ink: '#20262B',
  paperText: '#20262B',
  muted: '#6E7276',
  line: '#C6BFB0',
  rust: '#C75B2A',
  rustSoft: 'rgba(199,91,42,0.14)',
  petrol: '#0F6B74',
  petrolSoft: 'rgba(15,107,116,0.13)',
  brass: '#8C6D2F',
  brassSoft: 'rgba(140,109,47,0.16)',
  stampRed: '#A63D2F',
  stampRedSoft: 'rgba(166,61,47,0.12)',
} as const;
