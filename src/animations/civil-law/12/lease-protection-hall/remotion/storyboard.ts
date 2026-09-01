export const FPS = 60;

export const SCENES = {
  'priority-purchase-renewal': {start: 0, duration: 600, previewEndTrimFrames: 0},
  'renewal-succession': {start: 600, duration: 480, previewEndTrimFrames: 0},
  'sale-no-break-lease': {start: 1080, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 1800;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
