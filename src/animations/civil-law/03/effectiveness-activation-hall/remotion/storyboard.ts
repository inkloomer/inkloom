export const FPS = 60;

export const SCENES = {
  'valid-effective-frame': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'approval-contract-desk': {start: 700, duration: 640, previewEndTrimFrames: 0},
  'condition-forks': {start: 1340, duration: 720, previewEndTrimFrames: 0},
  'term-gates': {start: 2060, duration: 680, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2740;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
