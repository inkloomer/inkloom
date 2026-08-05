export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  filingGate: scene(0, 255),
  threeDocuments: scene(255, 270),
  repeatSuitTest: scene(525, 270),
  withdrawalAbsence: scene(795, 255),
  proceduralObstacles: scene(1050, 315),
  judgmentDocuments: scene(1365, 270),
  judgmentEffects: scene(1635, 285),
  marriageValidityBoundary: scene(1920, 270),
} as const;

export const DURATION_FRAMES = 2190;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
