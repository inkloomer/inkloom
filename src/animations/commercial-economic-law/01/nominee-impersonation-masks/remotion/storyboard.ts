export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  maskTheft: scene(0, 290),
  negativeSuit: scene(290, 260),
  proxyHolding: scene(550, 310),
} as const;

export const DURATION_FRAMES = 860;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
