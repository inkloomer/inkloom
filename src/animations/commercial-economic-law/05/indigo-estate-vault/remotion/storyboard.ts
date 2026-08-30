export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  fourFork: scene(0, 220),
  workerClaims: scene(220, 220),
  transitGate: scene(440, 220),
  clawback: scene(660, 220),
} as const;

export const DURATION_FRAMES = 880;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
