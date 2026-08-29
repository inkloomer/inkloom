export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 37.5;

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
  serviceRoutes: slowScene(0, 480),
  hagueInbound: slowScene(480, 390),
  evidenceLanes: slowScene(870, 420),
  judgmentRecognition: slowScene(1290, 480),
  arbitralAwards: slowScene(1770, 480),
} as const;

export const PALETTE = {
  midnight: '#141B2E',
  panel: '#1C2540',
  cream: '#F2EEDF',
  ink: '#141B2E',
  paperText: '#F2EEDF',
  muted: '#8B94AD',
  line: '#33405F',
  brass: '#C9A227',
  brassSoft: 'rgba(201,162,39,0.16)',
  seal: '#C2554F',
  sealSoft: 'rgba(194,85,79,0.16)',
  signal: '#4E9B8F',
  signalSoft: 'rgba(78,155,143,0.16)',
} as const;
