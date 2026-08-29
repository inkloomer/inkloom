export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  definitionClassification: scene(0, 252),
  processFriction: scene(252, 264),
  modernMarks: scene(516, 264),
} as const;

export const DURATION_FRAMES = 780;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
