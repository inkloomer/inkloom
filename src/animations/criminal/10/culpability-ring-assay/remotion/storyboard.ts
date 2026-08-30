export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  culpabilityGateLine: scene(0, 250),
  ageRingGrades: scene(250, 260),
  ageTwelveFourteen: scene(510, 250),
  ageFourteenSixteen: scene(760, 270),
  capacityCoreGrades: scene(1030, 270),
  actResponsibilitySimultaneity: scene(1300, 270),
  mistakeFactLawFork: scene(1570, 270),
  expectationPossibility: scene(1840, 250),
} as const;

export const DURATION_FRAMES = 2090;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
