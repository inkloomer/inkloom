export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  unilateralOverview: scene(0, 260),
  unilateralHelpCase: scene(260, 270),
  unilateralLookoutDebate: scene(530, 250),
  unilateralInstigationCase: scene(780, 250),
  unilateralExecutionCase: scene(1030, 260),
  examTwoCases: scene(1290, 270),
} as const;

export const DURATION_FRAMES = 1560;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
