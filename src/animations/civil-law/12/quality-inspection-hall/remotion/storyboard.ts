export const FPS = 60;

export const SCENES = {
  'fruit-ip-strip': {start: 0, duration: 600, previewEndTrimFrames: 0},
  'inspection-gate-series': {start: 600, duration: 660, previewEndTrimFrames: 0},
  'risk-direct-lanes': {start: 1260, duration: 660, previewEndTrimFrames: 0},
  'risk-indirect-ledger': {start: 1920, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2580;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
