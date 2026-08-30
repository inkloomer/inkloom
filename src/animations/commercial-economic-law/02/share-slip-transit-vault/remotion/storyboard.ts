export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  twoSlips: scene(0, 280),
  limitedTracks: scene(280, 300),
  generalTracks: scene(580, 290),
} as const;

export const DURATION_FRAMES = 870;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
