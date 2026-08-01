export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  burdenRisk: scene(0, 135),
  affirmativeBurden: scene(135, 150),
  twoInversions: scene(285, 150),
  threeSteps: scene(435, 180),
  exemptFactsBoundary: scene(615, 195),
  specialBurdenRules: scene(810, 210),
  proofStandardLadder: scene(1020, 195),
  proofChain: scene(1215, 195),
} as const;

export const DURATION_FRAMES = 1410;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
