export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  expulsion: scene(0, 290),
  admission: scene(290, 290),
  inheritance: scene(580, 300),
} as const;

export const DURATION_FRAMES = 880;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
