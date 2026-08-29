export const FPS = 60;

export const SCENES = {
  "defense-kinds-lanes": { start: 0, duration: 500, previewEndTrimFrames: 0 },
  "duty-lawyer-lighthouse": { start: 500, duration: 560, previewEndTrimFrames: 0 },
  "aid-boundaries-scene": { start: 1060, duration: 480, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1540;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
