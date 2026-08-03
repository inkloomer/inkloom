export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  contentDistinction: scene(0, 180),
  protectiveOrders: scene(180, 195),
  sameCourtReview: scene(375, 180),
} as const;

export const DURATION_FRAMES = 555;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
