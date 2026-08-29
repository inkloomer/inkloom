export const FPS = 60;

export const SCENES = {
  "five-stage-street": { start: 0, duration: 520, previewEndTrimFrames: 0 },
  "opening-rules-lane": { start: 520, duration: 500, previewEndTrimFrames: 0 },
  "verdict-square": { start: 1020, duration: 520, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1540;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
