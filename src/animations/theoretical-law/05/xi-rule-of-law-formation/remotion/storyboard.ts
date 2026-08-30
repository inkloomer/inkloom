export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  formationLogic: scene(0, 264),
  featuresSignificance: scene(264, 240),
} as const;

export const DURATION_FRAMES = 504;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
