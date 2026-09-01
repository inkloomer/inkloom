export const FPS = 60;

export const SCENES = {
  'culpa-formula-gates': {start: 0, duration: 600, previewEndTrimFrames: 0},
  'strict-liability-scales': {start: 600, duration: 720, previewEndTrimFrames: 0},
  'harmful-performance-fork': {start: 1320, duration: 660, previewEndTrimFrames: 0},
  'penalty-deposit-ledgers': {start: 1980, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2700;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
