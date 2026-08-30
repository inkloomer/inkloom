export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  statusCrimeDuality: scene(0, 250),
  publicOfficialDial: scene(250, 250),
  unitCrimeGate: scene(500, 250),
  fourModelCrossing: scene(750, 240),
  unitCrossingRules: scene(990, 260),
} as const;

export const DURATION_FRAMES = 1250;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
