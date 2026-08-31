export const FPS = 60;

export const SCENES = {
  'offer-acceptance-chain': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'bid-auction-ads': {start: 720, duration: 720, previewEndTrimFrames: 0},
  'standard-clauses-court': {start: 1440, duration: 720, previewEndTrimFrames: 0},
  'future-contract-split': {start: 2160, duration: 600, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2760;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
