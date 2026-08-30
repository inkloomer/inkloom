export const FPS = 60;

export const SCENES = {
  'void-core-wall': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'mandatory-rules-desk': {start: 700, duration: 660, previewEndTrimFrames: 0},
  'voidable-rights-desk': {start: 1360, duration: 700, previewEndTrimFrames: 0},
  'fraud-mistake-forks': {start: 2060, duration: 740, previewEndTrimFrames: 0},
  'duress-fairness-forks': {start: 2800, duration: 720, previewEndTrimFrames: 0},
  'pending-final-ledger': {start: 3520, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 4240;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
