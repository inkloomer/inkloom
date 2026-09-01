export const FPS = 60;

export const SCENES = {
  'trial-purchase-cycle': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'installment-protection-fork': {start: 660, duration: 660, previewEndTrimFrames: 0},
  'retention-retrieval-loop': {start: 1320, duration: 720, previewEndTrimFrames: 0},
  'trilogy-comparison-ledger': {start: 2040, duration: 600, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2640;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
