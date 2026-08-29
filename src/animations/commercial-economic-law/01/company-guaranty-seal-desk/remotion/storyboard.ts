export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  soleGuaranty: scene(0, 280),
  inversionScale: scene(280, 250),
  forgedResolution: scene(530, 300),
} as const;

export const DURATION_FRAMES = 830;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
