export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 26.5;

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
  conceptTypes: slowScene(0, 390),
  characterization: slowScene(390, 240),
  renvoi: slowScene(630, 300),
  foreignLawAscertainment: slowScene(930, 450),
  publicPolicy: slowScene(1380, 210),
} as const;

export const PALETTE = {
  aubergine: '#2A2130',
  panel: '#352B3D',
  bulletin: '#EFE8F2',
  ink: '#2A2130',
  paperText: '#EFE8F2',
  muted: '#9C8FA8',
  line: '#4E4060',
  amber: '#D9A03F',
  amberSoft: 'rgba(217,160,63,0.16)',
  route: '#6FA06B',
  routeSoft: 'rgba(111,160,107,0.16)',
  reroute: '#C25A50',
  rerouteSoft: 'rgba(194,90,80,0.16)',
} as const;
