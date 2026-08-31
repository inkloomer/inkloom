export const FPS = 60;

export const SCENES = {
  'property-ownership-gates': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'house-and-fruit-sorter': {start: 700, duration: 760, previewEndTrimFrames: 0},
  'debt-and-gift-lane': {start: 1460, duration: 760, previewEndTrimFrames: 0},
  'divorce-paths-lane': {start: 2220, duration: 780, previewEndTrimFrames: 0},
  'divorce-aftermath-bench': {start: 3000, duration: 820, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3820;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
