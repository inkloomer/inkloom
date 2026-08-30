export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  mainPenaltyLadder: scene(0, 260),
  creditOffsetDial: scene(260, 260),
  deathReviewTrack: scene(520, 250),
  fineOrderMerge: scene(770, 260),
  rightsDeportNonpenal: scene(1030, 260),
} as const;

export const DURATION_FRAMES = 1290;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
