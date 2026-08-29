export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  resignRemoval: scene(0, 330),
  relatedDeal: scene(330, 320),
  shadowDirector: scene(650, 280),
} as const;

export const DURATION_FRAMES = 930;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
