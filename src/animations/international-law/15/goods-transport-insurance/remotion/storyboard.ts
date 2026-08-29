export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 52;

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
  billOfLading: slowScene(0, 480),
  carrierDelivery: slowScene(480, 450),
  carrierCargoLoss: slowScene(930, 420),
  threeRules: slowScene(1350, 480),
  transportModes: slowScene(1830, 390),
  marineRisksLosses: slowScene(2220, 450),
  insuranceCoverage: slowScene(2670, 450),
} as const;

export const PALETTE = {
  wine: '#38202B',
  panel: '#472A36',
  paper: '#F4E8DC',
  paperText: '#F4E8DC',
  muted: '#A88E96',
  line: '#5E3A48',
  brass: '#C9A15C',
  brassSoft: 'rgba(201,161,92,0.15)',
  marine: '#6FA3BF',
  marineSoft: 'rgba(111,163,191,0.14)',
  ok: '#93B573',
  okSoft: 'rgba(147,181,115,0.14)',
  signal: '#C4584A',
  signalSoft: 'rgba(196,88,74,0.15)',
} as const;
