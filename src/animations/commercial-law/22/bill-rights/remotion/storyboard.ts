export const FPS=60;
export const SCENES={
  'bill-rights-scene-01': {start: 0, duration: 330, previewEndTrimFrames: 0},
  'bill-rights-scene-02': {start: 330, duration: 330, previewEndTrimFrames: 0},
  'bill-rights-scene-03': {start: 660, duration: 330, previewEndTrimFrames: 0},
  'bill-rights-scene-04': {start: 990, duration: 330, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1320;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
