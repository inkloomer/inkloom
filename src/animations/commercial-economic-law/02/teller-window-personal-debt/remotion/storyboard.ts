export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  twoPermits: scene(0, 280),
  twoBans: scene(280, 270),
  preemption: scene(550, 290),
} as const;

export const DURATION_FRAMES = 840;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
