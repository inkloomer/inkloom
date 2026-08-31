export const FPS=60;
export const SCENES={
  'trust-scene-01': {start: 0, duration: 330, previewEndTrimFrames: 0},
  'trust-scene-02': {start: 330, duration: 340, previewEndTrimFrames: 0},
  'trust-scene-03': {start: 670, duration: 340, previewEndTrimFrames: 0},
  'trust-scene-04': {start: 1010, duration: 320, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1330;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
