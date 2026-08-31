export const FPS = 60;

export const SCENES = {
  'offset-fulfilment-ladder': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'deposit-tally': {start: 720, duration: 600, previewEndTrimFrames: 0},
  'offset-pair': {start: 1320, duration: 720, previewEndTrimFrames: 0},
  'confusion-waiver-fork': {start: 2040, duration: 600, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2640;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
