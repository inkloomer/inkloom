export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  casting: scene(0, 252),
  fajing: scene(252, 264),
  shangYang: scene(516, 240),
} as const;

export const DURATION_FRAMES = 756;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
