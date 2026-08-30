export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  subjectObjectLedger: scene(0, 260),
  burdenSplitRules: scene(260, 300),
  trapsRecapShelf: scene(560, 270),
} as const;

export const DURATION_FRAMES = 830;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
