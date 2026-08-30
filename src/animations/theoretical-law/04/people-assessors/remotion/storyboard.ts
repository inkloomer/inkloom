export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  quota: scene(0, 276),
  bench: scene(276, 288),
  dutySafety: scene(564, 216),
} as const;

export const DURATION_FRAMES = 780;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
