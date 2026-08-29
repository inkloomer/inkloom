export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  twoLayerStructure: scene(0, 276),
  fiveGuidingFunctions: scene(276, 300),
  evaluationVerdictFlow: scene(576, 252),
  socialRolePillars: scene(828, 252),
} as const;

export const DURATION_FRAMES = 1080;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
