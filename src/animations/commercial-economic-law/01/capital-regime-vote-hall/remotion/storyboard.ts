export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  classShare: scene(0, 280),
  authorizedCapital: scene(280, 310),
  reserveMisuse: scene(590, 300),
} as const;

export const DURATION_FRAMES = 890;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
