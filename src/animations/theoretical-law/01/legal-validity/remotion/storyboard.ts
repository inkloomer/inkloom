export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  personalReach: scene(0, 240),
  spatialReach: scene(240, 252),
  temporalReach: scene(492, 264),
} as const;

export const DURATION_FRAMES = 756;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
