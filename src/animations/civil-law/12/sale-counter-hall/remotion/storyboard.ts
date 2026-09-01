export const FPS = 60;

export const SCENES = {
  'unauthorized-frame': {start: 0, duration: 600, previewEndTrimFrames: 0},
  'agency-coexist-fork': {start: 600, duration: 720, previewEndTrimFrames: 0},
  'multi-sale-lanes': {start: 1320, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 1980;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
