export const FPS = 60;

export const SCENES = {
  'publicity-appearance': {start: 0, duration: 600, previewEndTrimFrames: 0},
  'formation-opposition': {start: 600, duration: 720, previewEndTrimFrames: 0},
  'two-special-lanes': {start: 1320, duration: 720, previewEndTrimFrames: 0},
  'third-party-contexts': {start: 2040, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2700;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
