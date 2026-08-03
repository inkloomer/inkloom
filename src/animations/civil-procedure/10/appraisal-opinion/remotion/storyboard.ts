export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  initiation: scene(0, 210),
  preparation: scene(210, 225),
  appearanceConsequences: scene(435, 255),
  appearanceConditions: scene(690, 195),
  appearanceProcedure: scene(885, 285),
} as const;

export const DURATION_FRAMES = 1170;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
