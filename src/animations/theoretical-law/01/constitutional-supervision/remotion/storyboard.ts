export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  interpretation: scene(0, 276),
  procedure: scene(276, 312),
  oath: scene(588, 264),
} as const;

export const DURATION_FRAMES = 852;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
