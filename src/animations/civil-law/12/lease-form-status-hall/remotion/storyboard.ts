export const FPS = 60;

export const SCENES = {
  'lease-form-indefinite': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'one-house-leases': {start: 660, duration: 660, previewEndTrimFrames: 0},
  'invalid-sublease': {start: 1320, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2040;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
