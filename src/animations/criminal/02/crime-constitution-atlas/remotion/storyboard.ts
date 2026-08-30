export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  elementsPipeline: scene(0, 250),
  stagedCrimeLadder: scene(250, 250),
  objectiveFirstSyllogism: scene(500, 260),
  elementTypeMatrix: scene(760, 220),
  doubtConcurrenceFork: scene(980, 240),
} as const;

export const DURATION_FRAMES = 1220;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
