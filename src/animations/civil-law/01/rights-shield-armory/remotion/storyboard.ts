export const FPS = 60;

export const SCENES = {
  'dominion-request-contrast': {start: 0, duration: 620, previewEndTrimFrames: 0},
  'three-request-lanes': {start: 620, duration: 640, previewEndTrimFrames: 0},
  'return-nuisance-danger-forks': {start: 1260, duration: 760, previewEndTrimFrames: 0},
  'defence-formative-powers': {start: 2020, duration: 640, previewEndTrimFrames: 0},
  'self-help-triple-stand': {start: 2660, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3380;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
