export const FPS = 60;

export const SCENES = {
  'land-contract-rights': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'construction-use-right': {start: 720, duration: 540, previewEndTrimFrames: 0},
  'residence-right': {start: 1260, duration: 600, previewEndTrimFrames: 0},
  'servitude-fork': {start: 1860, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2580;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
