export const FPS = 60;

export const SCENES = {
  'rescission-family-fork': {start: 0, duration: 600, previewEndTrimFrames: 0},
  'situation-force-compare': {start: 600, duration: 720, previewEndTrimFrames: 0},
  'breach-trio-march': {start: 1320, duration: 720, previewEndTrimFrames: 0},
  'exercise-time-consequence': {start: 2040, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2700;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
