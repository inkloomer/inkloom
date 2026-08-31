export const FPS=60;
export const SCENES={
  'securities-scene-01': {start: 0, duration: 290, previewEndTrimFrames: 0},
  'securities-scene-02': {start: 290, duration: 290, previewEndTrimFrames: 0},
  'securities-scene-03': {start: 580, duration: 300, previewEndTrimFrames: 0},
  'securities-scene-04': {start: 880, duration: 300, previewEndTrimFrames: 0},
  'securities-scene-05': {start: 1180, duration: 280, previewEndTrimFrames: 0},
  'securities-scene-06': {start: 1460, duration: 300, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1760;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
