export const FPS=60;
export const SCENES={
  'promoter-scene-01': {start: 0, duration: 360, previewEndTrimFrames: 0},
  'promoter-scene-02': {start: 360, duration: 384, previewEndTrimFrames: 0},
  'promoter-scene-03': {start: 744, duration: 396, previewEndTrimFrames: 0},
} as const;
export const DURATION_FRAMES=1140;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
