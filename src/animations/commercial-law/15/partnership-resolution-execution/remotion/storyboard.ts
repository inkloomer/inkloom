export const FPS=60;
export const SCENES={
  'partnership-resolution-execution-scene-01': {start: 0, duration: 300, previewEndTrimFrames: 0},
  'partnership-resolution-execution-scene-02': {start: 300, duration: 340, previewEndTrimFrames: 0},
  'partnership-resolution-execution-scene-03': {start: 640, duration: 320, previewEndTrimFrames: 0},
  'partnership-resolution-execution-scene-04': {start: 960, duration: 320, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1280;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
