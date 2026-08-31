export const FPS=60;
export const SCENES={
  'draft-scene-01': {start: 0, duration: 340, previewEndTrimFrames: 0},
  'draft-scene-02': {start: 340, duration: 360, previewEndTrimFrames: 0},
  'draft-scene-03': {start: 700, duration: 340, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1040;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
