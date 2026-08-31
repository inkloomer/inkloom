export const FPS = 60;

export const SCENES = {
  'vitality-rights-rack': {start: 0, duration: 780, previewEndTrimFrames: 0},
  'name-portrait-gallery': {start: 780, duration: 840, previewEndTrimFrames: 0},
  'reputation-privacy-bench': {start: 1620, duration: 880, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2500;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
