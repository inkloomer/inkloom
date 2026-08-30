export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  requisition: scene(0, 290),
  negativeList: scene(290, 290),
  retroactive: scene(580, 260),
} as const;

export const DURATION_FRAMES = 840;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
