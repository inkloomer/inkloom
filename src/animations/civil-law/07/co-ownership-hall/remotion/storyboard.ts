export const FPS = 60;

export const SCENES = {
  'twin-ownership-types': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'internal-relations-chains': {start: 660, duration: 720, previewEndTrimFrames: 0},
  'case-fork-and-external': {start: 1380, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2040;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
