export const FPS = 60;

export const SCENES = {
  'basis-object-pairs': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'joint-share-fork': {start: 660, duration: 720, previewEndTrimFrames: 0},
  'simple-choice-loom': {start: 1380, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2040;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
