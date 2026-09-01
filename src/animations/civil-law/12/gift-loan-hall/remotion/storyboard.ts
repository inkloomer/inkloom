export const FPS = 60;

export const SCENES = {
  'gift-revocation-duo': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'statutory-revocation': {start: 660, duration: 660, previewEndTrimFrames: 0},
  'obligation-condition-order': {start: 1320, duration: 660, previewEndTrimFrames: 0},
  'loan-formation-invalidity': {start: 1980, duration: 660, previewEndTrimFrames: 0},
  'loan-interest-rules': {start: 2640, duration: 600, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3240;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
