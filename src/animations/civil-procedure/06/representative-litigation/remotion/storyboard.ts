export const FPS = 60;
export const PLAYBACK_RATE = 0.6;
export const SOURCE_DURATION_SECONDS = 34;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const previewEndTrimFrames = toPlaybackFrames(14);
const scene = (start: number, duration: number) => ({
  start: toPlaybackFrames(start),
  duration: toPlaybackFrames(duration),
  previewEndTrimFrames,
});

export const DURATION_FRAMES = toPlaybackFrames(SOURCE_DURATION_SECONDS * FPS);
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

// These ranges are a published deep-link contract. Keep their order and boundaries stable.
export const SCENES = {
  concept: scene(0, 180),
  authority: scene(180, 240),
  determined: scene(420, 300),
  undetermined: scene(720, 360),
  securities: scene(1080, 360),
  recap: scene(1440, 300),
} as const;

export const PALETTE = {
  panel: '#EEF1EA',
  surface: '#FCFFF8',
  ink: '#141914',
  muted: '#667066',
  line: '#9DA89D',
  signal: '#087F8C',
  signalSoft: '#CFE9E8',
  amber: '#E1A51B',
  amberSoft: '#F8E9B7',
  magenta: '#C63F68',
  magentaSoft: '#F3D6DF',
  green: '#3F7C4A',
  greenSoft: '#D9EAD9',
} as const;
