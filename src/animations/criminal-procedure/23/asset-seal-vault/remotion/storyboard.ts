export const FPS = 60;

export const SCENES = {
  "entry-conditions-fork": { start: 0, duration: 500, previewEndTrimFrames: 0 },
  "application-notice-lane": { start: 500, duration: 580, previewEndTrimFrames: 0 },
  "trial-verdict-outcome": { start: 1080, duration: 620, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1700;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
