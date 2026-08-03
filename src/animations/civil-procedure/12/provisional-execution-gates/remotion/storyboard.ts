export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {
  eligibleClaims: scene(0, 195),
  fourGates: scene(195, 210),
  scopeAndSecurity: scene(405, 180),
  timingWindow: scene(585, 180),
  reviewRemedy: scene(765, 180),
} as const;
export const DURATION_FRAMES = 945;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
