export const FPS = 60;

export const SCENES = {
  'contractor-employment-fork': {start: 0, duration: 600, previewEndTrimFrames: 0},
  'rescission-trio': {start: 600, duration: 660, previewEndTrimFrames: 0},
  'site-types-forms': {start: 1260, duration: 540, previewEndTrimFrames: 0},
  'site-void-causes': {start: 1800, duration: 660, previewEndTrimFrames: 0},
  'site-price-bidding': {start: 2460, duration: 660, previewEndTrimFrames: 0},
  'site-priority-litigation': {start: 3120, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3840;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
