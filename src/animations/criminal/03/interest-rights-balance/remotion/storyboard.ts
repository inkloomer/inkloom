export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  objectInterestRows: scene(0, 240),
  doctrineForkEmptyHouse: scene(240, 240),
  dualCharterBalance: scene(480, 260),
} as const;

export const DURATION_FRAMES = 740;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
