export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  dimensionCompare: scene(0, 276),
  allOrWeighing: scene(276, 264),
  thresholdConditions: scene(540, 252),
} as const;

export const DURATION_FRAMES = 792;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
