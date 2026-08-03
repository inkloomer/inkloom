export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  caveatsBoard: scene(0, 210),
  courtOutsiderGate: scene(210, 240),
  fixedCounterproof: scene(450, 240),
  fictionVerdict: scene(690, 240),
} as const;

export const DURATION_FRAMES = 930;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
