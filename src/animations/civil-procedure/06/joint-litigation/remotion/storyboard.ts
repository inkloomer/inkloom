export const FPS = 60;
export const PLAYBACK_RATE = 0.6;
export const SOURCE_DURATION_SECONDS = 32;

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
  definition: scene(0, 180),
  ordinary: scene(180, 240),
  necessary: scene(420, 240),
  comparison: scene(660, 300),
  examples: scene(960, 360),
  recap: scene(1320, 300),
  relations: scene(1620, 300),
} as const;

export const PALETTE = {
  canvas: '#E9E4D8',
  paper: '#FFFDF6',
  ink: '#171813',
  muted: '#6B695F',
  rule: '#B8B1A1',
  cobalt: '#1D55A6',
  cobaltSoft: '#DCE7F7',
  thread: '#D84A36',
  threadSoft: '#F7DDD6',
  mustard: '#D8A51F',
  mustardSoft: '#F7EDC6',
  green: '#2B765F',
  greenSoft: '#DCEDE5',
} as const;
