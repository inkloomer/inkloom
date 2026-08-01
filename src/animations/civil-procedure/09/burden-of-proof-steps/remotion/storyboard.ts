export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  burdenRisk: scene(0, 135),
  affirmativeBurden: scene(135, 150),
  twoInversions: scene(285, 150),
  threeSteps: scene(435, 180),
} as const;

export const DURATION_FRAMES = 615;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
