export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 39;

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
  parisBerne: slowScene(0, 450),
  tripsUpgrade: slowScene(450, 450),
  migaIcsid: slowScene(900, 480),
  loansGuarantees: slowScene(1380, 480),
  taxRegimes: slowScene(1860, 480),
} as const;

export const PALETTE = {
  celadon: '#DCE7DF',
  panel: '#EAF1EB',
  ink: '#254237',
  paperText: '#254237',
  muted: '#6E8A7D',
  line: '#B5C9BC',
  glaze: '#2E7D6E',
  glazeSoft: 'rgba(46,125,110,0.14)',
  ochre: '#B07D3F',
  ochreSoft: 'rgba(176,125,63,0.16)',
  plum: '#8E4A5B',
  plumSoft: 'rgba(142,74,91,0.14)',
} as const;
