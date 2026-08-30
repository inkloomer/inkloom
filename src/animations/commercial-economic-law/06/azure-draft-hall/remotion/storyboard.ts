export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  postHonour: scene(0, 290),
  discountCounter: scene(290, 290),
  forgedSeal: scene(580, 290),
} as const;

export const DURATION_FRAMES = 870;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
