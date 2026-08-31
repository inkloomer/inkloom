export const FPS = 60;

export const SCENES = {
  'elements-gate': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'return-scope-lane': {start: 720, duration: 660, previewEndTrimFrames: 0},
  'return-target-fork': {start: 1380, duration: 660, previewEndTrimFrames: 0},
  'cumulation-ledger': {start: 2040, duration: 600, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2640;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
