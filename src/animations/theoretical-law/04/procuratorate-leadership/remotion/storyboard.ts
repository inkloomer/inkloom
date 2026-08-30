export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  dualTrack: scene(0, 192),
  disagreement: scene(192, 192),
} as const;

export const DURATION_FRAMES = 384;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
