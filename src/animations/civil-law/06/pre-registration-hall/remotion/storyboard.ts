export const FPS = 60;

export const SCENES = {
  'non-contract-shifts': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'document-forks': {start: 720, duration: 660, previewEndTrimFrames: 0},
  'notice-registration': {start: 1380, duration: 600, previewEndTrimFrames: 0},
  'objection-registration': {start: 1980, duration: 780, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2760;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
