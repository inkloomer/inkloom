export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  conceptPrecondition: scene(0, 240),
  classificationLattice: scene(240, 264),
  fillingMethods: scene(504, 264),
  interpretationBoundary: scene(768, 240),
} as const;

export const DURATION_FRAMES = 1008;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
