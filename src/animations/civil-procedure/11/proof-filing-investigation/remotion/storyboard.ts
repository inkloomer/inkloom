export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  deadlineRoutes: scene(0, 180),
  extensionBridge: scene(180, 165),
  lateEvidenceSwitch: scene(345, 240),
  courtCollectionBoundary: scene(585, 225),
} as const;

export const DURATION_FRAMES = 810;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
