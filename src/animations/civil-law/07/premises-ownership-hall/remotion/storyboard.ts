export const FPS = 60;

export const SCENES = {
  'land-house-integration': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'condominium-dependence': {start: 660, duration: 660, previewEndTrimFrames: 0},
  'community-parking-rules': {start: 1320, duration: 600, previewEndTrimFrames: 0},
  'voting-threshold-ladder': {start: 1920, duration: 660, previewEndTrimFrames: 0},
  'neighboring-relations-fork': {start: 2580, duration: 600, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3180;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
