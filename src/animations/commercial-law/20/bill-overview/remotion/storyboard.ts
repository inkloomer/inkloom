export const FPS=60;
export const SCENES={
  'bill-overview-scene-01': {start: 0, duration: 320, previewEndTrimFrames: 0},
  'bill-overview-scene-02': {start: 320, duration: 330, previewEndTrimFrames: 0},
  'bill-overview-scene-03': {start: 650, duration: 330, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=980;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
