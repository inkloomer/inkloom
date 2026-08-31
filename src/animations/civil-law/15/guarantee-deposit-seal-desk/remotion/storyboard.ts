export const FPS = 60;

export const SCENES = {
  'guarantee-concept-fork': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'guarantee-liability-lanes': {start: 700, duration: 700, previewEndTrimFrames: 0},
  'guarantee-period-clock-bank': {start: 1400, duration: 820, previewEndTrimFrames: 0},
  'deposit-penalty-counter': {start: 2220, duration: 780, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3000;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
