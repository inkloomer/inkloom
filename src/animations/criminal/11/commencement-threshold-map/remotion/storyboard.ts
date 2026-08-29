export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  stageBoundary: scene(0, 230),
  examCommencementMap: scene(230, 360),
  specialCasesLane: scene(590, 250),
  formsOverview: scene(840, 240),
  preparationGates: scene(1080, 260),
  preparationStageFork: scene(1340, 170),
  attemptElements: scene(1510, 180),
  impossibilityFork: scene(1690, 250),
  dangerTheories: scene(1940, 270),
  automatismFrankFormula: scene(2210, 280),
  mistakeSpecificObject: scene(2490, 260),
  discontinuationConduct: scene(2750, 240),
  effectivenessMatrix: scene(2990, 200),
  interveningTwoSteps: scene(3190, 220),
  discontinuationPenalty: scene(3410, 220),
  completionElements: scene(3630, 220),
  causationChains: scene(3850, 280),
  objectTransfer: scene(4130, 170),
  formsExclusion: scene(4300, 280),
  repeatAttacks: scene(4580, 200),
} as const;

export const DURATION_FRAMES = 4780;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
