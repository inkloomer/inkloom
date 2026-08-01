export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {
  proofMethod: scene(0, 160),
  mediumBoundary: scene(160, 160),
  ruleCarryover: scene(320, 160),
} as const;
export const DURATION_FRAMES = 480;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
