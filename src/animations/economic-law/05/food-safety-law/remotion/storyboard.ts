export const FPS=60;
export const SCENES={
  'food-safety-law-scene-01': {start: 0, duration: 310, previewEndTrimFrames: 0},
  'food-safety-law-scene-02': {start: 310, duration: 310, previewEndTrimFrames: 0},
  'food-safety-law-scene-03': {start: 620, duration: 320, previewEndTrimFrames: 0},
  'food-safety-law-scene-04': {start: 940, duration: 310, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1250;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
