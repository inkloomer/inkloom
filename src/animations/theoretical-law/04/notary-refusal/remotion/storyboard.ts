export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  refusal: scene(0, 240),
  stopObject: scene(240, 204),
} as const;

export const DURATION_FRAMES = 444;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
