export const FPS = 60;

export const SCENES = {
  'system-tree': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'principal-accessory': {start: 660, duration: 600, previewEndTrimFrames: 0},
  'original-fruit': {start: 1260, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 1980;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
