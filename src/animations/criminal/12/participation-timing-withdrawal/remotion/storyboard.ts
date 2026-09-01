export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  timingThreePhases: scene(0, 270),
  successiveLiabilityRule: scene(270, 260),
  deathTimeInference: scene(530, 260),
  houseEntrySuccessiveQuiz: scene(790, 260),
  withdrawalConditions: scene(1050, 250),
  roleWithdrawalRequirements: scene(1300, 260),
  withdrawalFourCases: scene(1560, 270),
  exam2024Options: scene(1830, 260),
} as const;

export const DURATION_FRAMES = 2090;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
