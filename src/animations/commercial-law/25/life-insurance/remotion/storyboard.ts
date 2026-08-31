export const FPS=60;
export const SCENES={
  'life-insurance-scene-01': {start: 0, duration: 320, previewEndTrimFrames: 0},
  'life-insurance-scene-02': {start: 320, duration: 320, previewEndTrimFrames: 0},
  'life-insurance-scene-03': {start: 640, duration: 330, previewEndTrimFrames: 0},
  'life-insurance-scene-04': {start: 970, duration: 320, previewEndTrimFrames: 0},
  'life-insurance-scene-05': {start: 1290, duration: 330, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1620;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
