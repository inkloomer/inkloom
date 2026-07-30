export const FPS = 30;
const previewScene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  overview: previewScene(0, 180),
  firstInstance: previewScene(180, 210),
  secondInstance: previewScene(390, 210),
  specialProcedures: previewScene(600, 210),
  misconceptions: previewScene(810, 180),
  conversion: previewScene(990, 210),
} as const;

export const DURATION_FRAMES = 1200;
