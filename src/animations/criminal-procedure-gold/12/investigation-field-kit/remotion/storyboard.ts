export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  interrogationRow: scene(0, 265),
  appraisalLineupBench: scene(265, 280),
  techSurveillanceGate: scene(545, 300),
} as const;

export const DURATION_FRAMES = 845;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
