export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  persist13: scene(0, 288),
  persist45: scene(288, 264),
  persist67: scene(552, 264),
  persist89: scene(816, 264),
  persist1012: scene(1080, 300),
} as const;

export const DURATION_FRAMES = 1380;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
