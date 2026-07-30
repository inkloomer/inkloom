export const FPS = 30;
const previewScene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  scope: previewScene(0, 180),
  grounds: previewScene(180, 210),
  application: previewScene(390, 180),
  pendingEffect: previewScene(570, 180),
  decision: previewScene(750, 210),
  remedy: previewScene(960, 210),
} as const;

export const DURATION_FRAMES = 1170;
