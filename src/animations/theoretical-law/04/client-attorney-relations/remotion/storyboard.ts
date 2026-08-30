export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  requirements: scene(0, 264),
  conflict: scene(264, 300),
  miscTermination: scene(564, 288),
} as const;

export const DURATION_FRAMES = 852;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
