export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  sixFeatures: scene(0, 240),
  independence: scene(240, 240),
} as const;

export const DURATION_FRAMES = 480;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
