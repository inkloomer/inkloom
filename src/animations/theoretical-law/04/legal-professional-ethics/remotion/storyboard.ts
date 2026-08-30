export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  conceptFeatures: scene(0, 252),
  annotations: scene(252, 216),
} as const;

export const DURATION_FRAMES = 468;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
