export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  caveatsBoard: scene(0, 420),
  fictionVerdict: scene(420, 240),
  courtOutsiderGate: scene(660, 240),
} as const;

export const DURATION_FRAMES = 900;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
