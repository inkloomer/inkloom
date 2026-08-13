export const FPS=60;
export const SCENES={
  'recovery-right-scene-01': {start: 0, duration: 360, previewEndTrimFrames: 0},
  'recovery-right-scene-02': {start: 360, duration: 390, previewEndTrimFrames: 0},
  'recovery-right-scene-03': {start: 750, duration: 366, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1116;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
