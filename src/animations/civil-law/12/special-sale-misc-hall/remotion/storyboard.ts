export const FPS = 60;

export const SCENES = {
  'sample-quality-clause': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'housing-permit-gate': {start: 660, duration: 720, previewEndTrimFrames: 0},
  'power-supply-duties': {start: 1380, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2100;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
