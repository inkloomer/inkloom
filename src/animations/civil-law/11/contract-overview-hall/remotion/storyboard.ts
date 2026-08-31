export const FPS = 60;

export const SCENES = {
  'reward-notice-dais': {start: 0, duration: 600, previewEndTrimFrames: 0},
  'nameless-kindness-pair': {start: 600, duration: 720, previewEndTrimFrames: 0},
  'interpretation-seven-loom': {start: 1320, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2040;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
