export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  removalArrival: scene(0, 290),
  notice: scene(290, 280),
  liability: scene(570, 290),
} as const;

export const DURATION_FRAMES = 860;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
