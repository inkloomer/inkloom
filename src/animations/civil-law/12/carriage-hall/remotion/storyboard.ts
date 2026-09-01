export const FPS = 60;

export const SCENES = {
  'passenger-liability': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'cargo-liability-split': {start: 660, duration: 660, previewEndTrimFrames: 0},
  'shipper-free-change': {start: 1320, duration: 600, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 1920;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
