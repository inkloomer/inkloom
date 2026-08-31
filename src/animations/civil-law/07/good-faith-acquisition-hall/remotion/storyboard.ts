export const FPS = 60;

export const SCENES = {
  'original-vs-derivative': {start: 0, duration: 540, previewEndTrimFrames: 0},
  'conditions-appearance-disposal': {start: 540, duration: 660, previewEndTrimFrames: 0},
  'conditions-good-faith-delivery': {start: 1200, duration: 660, previewEndTrimFrames: 0},
  'lost-property-window': {start: 1860, duration: 660, previewEndTrimFrames: 0},
  'consequences-remedies': {start: 2520, duration: 540, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3060;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
