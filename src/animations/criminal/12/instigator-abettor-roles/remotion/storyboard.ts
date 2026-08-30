export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  instigatorEssence: scene(0, 250),
  instigationTargetMatrix: scene(250, 270),
  instigatorCompletionCase: scene(520, 260),
  instigatorPunishment: scene(780, 260),
  abettorEssence: scene(1040, 260),
  abettorCompletionModels: scene(1300, 270),
  psychologicalHelp: scene(1570, 270),
  neutralHelpConduct: scene(1840, 250),
} as const;

export const DURATION_FRAMES = 2090;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
