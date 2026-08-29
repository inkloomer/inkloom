export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 34;

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
  documentService: slowScene(0, 360),
  evidenceTaking: slowScene(360, 450),
  judgmentEnforcement: slowScene(810, 480),
  arbitralAward: slowScene(1290, 420),
  commonRules: slowScene(1710, 330),
} as const;

export const PALETTE = {
  night: '#0C1220',
  panel: '#141C2E',
  flap: '#1B2540',
  paperText: '#F2E9D8',
  muted: '#77839B',
  line: '#2A3654',
  amber: '#F0B24A',
  amberSoft: 'rgba(240,178,74,0.15)',
  mo: '#6FC2B0',
  moSoft: 'rgba(111,194,176,0.14)',
  tw: '#E8836E',
  twSoft: 'rgba(232,131,110,0.14)',
  signal: '#E4574A',
  signalSoft: 'rgba(228,87,74,0.16)',
  ok: '#8FC97E',
  okSoft: 'rgba(143,201,126,0.16)',
} as const;
