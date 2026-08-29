export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  conceptFeatures: scene(0, 252),
  kindPairs: scene(252, 288),
  objectDishes: scene(540, 288),
  lifecycleFacts: scene(828, 252),
} as const;

export const DURATION_FRAMES = 1080;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
