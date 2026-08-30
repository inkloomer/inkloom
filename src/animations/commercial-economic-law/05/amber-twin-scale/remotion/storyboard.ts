export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  twinLoans: scene(0, 290),
  renewalFees: scene(290, 290),
  priorityRecap: scene(580, 260),
} as const;

export const DURATION_FRAMES = 840;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
