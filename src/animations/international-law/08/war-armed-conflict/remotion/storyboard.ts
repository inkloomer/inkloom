export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 25;

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
  warDefinition: slowScene(0, 300),
  warConsequences: slowScene(300, 420),
  combatLimits: slowScene(720, 360),
  genevaIcc: slowScene(1080, 420),
} as const;

export const PALETTE = {
  field: '#2E2A22',
  panel: '#3A352B',
  bulletin: '#EFEAD8',
  ink: '#2E2A22',
  paperText: '#EFEAD8',
  muted: '#9A917C',
  line: '#56503F',
  khaki: '#B49B62',
  khakiSoft: 'rgba(180,155,98,0.16)',
  olive: '#7A8450',
  oliveSoft: 'rgba(122,132,80,0.16)',
  censor: '#C24A38',
  censorSoft: 'rgba(194,74,56,0.16)',
} as const;
