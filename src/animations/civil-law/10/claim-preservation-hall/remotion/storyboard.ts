export const FPS = 60;

export const SCENES = {
  'subrogation-gate': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'revocation-conditions': {start: 720, duration: 720, previewEndTrimFrames: 0},
  'revocation-exercise-ladder': {start: 1440, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2100;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
