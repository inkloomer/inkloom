export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  fiveFunctions: scene(0, 240),
  distinctions: scene(240, 216),
} as const;

export const DURATION_FRAMES = 456;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
