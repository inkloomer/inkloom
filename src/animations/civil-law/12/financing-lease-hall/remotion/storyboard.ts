export const FPS = 60;

export const SCENES = {
  'financing-overview': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'liability-allocation': {start: 660, duration: 660, previewEndTrimFrames: 0},
  'rent-protection': {start: 1320, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 1980;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
