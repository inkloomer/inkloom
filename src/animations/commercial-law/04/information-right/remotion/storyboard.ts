export const FPS=60;
export const SCENES={
  'information-right-scene-01': {start: 0, duration: 360, previewEndTrimFrames: 0},
  'information-right-scene-02': {start: 360, duration: 384, previewEndTrimFrames: 0},
  'information-right-scene-03': {start: 744, duration: 384, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1128;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
