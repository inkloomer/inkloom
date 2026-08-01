export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  authenticityRule: scene(0, 195),
  documentOrder: scene(195, 210),
  bestEvidence: scene(405, 150),
} as const;

export const DURATION_FRAMES = 555;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
