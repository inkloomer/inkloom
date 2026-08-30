export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  conditions: scene(0, 300),
  avoidance: scene(300, 276),
  appointment: scene(576, 312),
} as const;

export const DURATION_FRAMES = 888;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
