export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  stateDefinition: scene(0, 252),
  multiparty: scene(252, 264),
  frontCppcc: scene(516, 276),
} as const;

export const DURATION_FRAMES = 792;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
