export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {
  publicDocumentRoute: scene(0, 210),
  identityDocumentRoute: scene(210, 240),
  translationAndTrap: scene(450, 210),
} as const;
export const DURATION_FRAMES = 660;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
