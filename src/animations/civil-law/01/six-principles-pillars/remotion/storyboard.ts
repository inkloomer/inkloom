export const FPS = 60;

export const SCENES = {
  'principle-functions-map': {start: 0, duration: 620, previewEndTrimFrames: 0},
  'equality-volition-forks': {start: 620, duration: 620, previewEndTrimFrames: 0},
  'fairness-goodfaith-benches': {start: 1240, duration: 600, previewEndTrimFrames: 0},
  'order-morals-green-court': {start: 1840, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2500;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
