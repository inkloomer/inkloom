export const FPS = 60;

export const SCENES = {
  'recourse-fork': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'fictional-credit-notice': {start: 660, duration: 660, previewEndTrimFrames: 0},
  'priority-race': {start: 1320, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2040;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
