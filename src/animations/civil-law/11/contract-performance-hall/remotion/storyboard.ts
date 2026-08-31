export const FPS = 60;

export const SCENES = {
  'defence-triad-court': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'third-party-lanes': {start: 720, duration: 720, previewEndTrimFrames: 0},
  'surrogate-performance-rails': {start: 1440, duration: 600, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2040;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
