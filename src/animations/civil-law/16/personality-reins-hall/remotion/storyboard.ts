export const FPS = 60;

export const SCENES = {
  'portrait-license-lane': {start: 0, duration: 640, previewEndTrimFrames: 0},
  'body-donation-lane': {start: 640, duration: 620, previewEndTrimFrames: 0},
  'clinical-trial-gates': {start: 1260, duration: 620, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 1880;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
