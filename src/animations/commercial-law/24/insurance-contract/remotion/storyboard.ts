export const FPS=60;
export const SCENES={
  'insurance-contract-scene-01': {start: 0, duration: 320, previewEndTrimFrames: 0},
  'insurance-contract-scene-02': {start: 320, duration: 320, previewEndTrimFrames: 0},
  'insurance-contract-scene-03': {start: 640, duration: 280, previewEndTrimFrames: 0},
  'insurance-contract-scene-04': {start: 920, duration: 360, previewEndTrimFrames: 0},
  'insurance-contract-scene-05': {start: 1280, duration: 320, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1600;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
