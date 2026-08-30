export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  intentConsistency: scene(0, 250),
  faultSpectrum: scene(250, 250),
  mistakeTwoStep: scene(500, 250),
  hitErrorTwoTheories: scene(750, 260),
  deferAdvanceAbsorb: scene(1010, 260),
} as const;

export const DURATION_FRAMES = 1270;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
