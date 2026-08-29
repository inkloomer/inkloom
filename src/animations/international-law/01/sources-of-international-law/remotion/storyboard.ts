export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 31.5;

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
  sources: slowScene(0, 330),
  customFormation: slowScene(330, 390),
  customVsConvention: slowScene(720, 300),
  counterSanctions: slowScene(1020, 420),
  blockadeChain: slowScene(1440, 450),
} as const;

export const PALETTE = {
  parchment: '#F4EFE3',
  paper: '#FBF8F0',
  ink: '#22303F',
  muted: '#7A7261',
  line: '#D8CFBB',
  seal: '#B23A2E',
  sealSoft: '#F5E1DC',
  navy: '#33566F',
  navySoft: '#E2EAEF',
  gold: '#96762E',
  goldSoft: '#F1E8CF',
} as const;
