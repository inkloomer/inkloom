export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 12});
export const SCENES = {
  entryAndExclusions: scene(0, 270),
  operationAndConversion: scene(270, 255),
  smallClaimThresholds: scene(525, 240),
  smallClaimExits: scene(765, 285),
} as const;
export const DURATION_FRAMES = 1050;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
