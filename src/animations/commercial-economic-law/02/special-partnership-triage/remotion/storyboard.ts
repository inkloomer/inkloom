export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  triageBoard: scene(0, 280),
  verdictWard: scene(280, 280),
  tenureTimeline: scene(560, 290),
} as const;

export const DURATION_FRAMES = 850;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
