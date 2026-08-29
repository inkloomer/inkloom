export const FPS = 60;

export const SCENES = {
  "three-stage-loop": { start: 0, duration: 480, previewEndTrimFrames: 0 },
  "count-time-dials": { start: 480, duration: 520, previewEndTrimFrames: 0 },
  "custody-stays-note": { start: 1000, duration: 440, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1440;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
