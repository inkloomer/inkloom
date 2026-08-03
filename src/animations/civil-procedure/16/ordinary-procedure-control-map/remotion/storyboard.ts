export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  filingGate: scene(0, 255),
  repeatSuitTest: scene(255, 270),
  withdrawalAbsence: scene(525, 255),
  proceduralObstacles: scene(780, 315),
  judgmentDocuments: scene(1095, 270),
  judgmentEffects: scene(1365, 285),
  marriageValidityBoundary: scene(1650, 270),
} as const;

export const DURATION_FRAMES = 1920;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
