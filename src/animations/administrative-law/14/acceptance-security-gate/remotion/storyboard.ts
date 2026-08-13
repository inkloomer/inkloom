export const FPS = 60;
const duration = 420;
const dense = 480;
export const SCENES = {
  "positive-list-lane": { start: 0, duration: dense, previewEndTrimFrames: 0 },
  "exclusion-barriers": { start: 480, duration: dense, previewEndTrimFrames: 0 },
  "agreement-counter": { start: 960, duration: 480, previewEndTrimFrames: 0 },
  "incidental-review-entry": { start: 1440, duration: 480, previewEndTrimFrames: 0 },
  "review-process-console": { start: 1920, duration: 480, previewEndTrimFrames: 0 },
  "court-handling-console": { start: 2400, duration: 480, previewEndTrimFrames: 0 },
  "suggestion-filing-console": { start: 2880, duration: 480, previewEndTrimFrames: 0 },
  "gate-traps": { start: 3360, duration: 480, previewEndTrimFrames: 0 },
} as const;
export const DURATION_FRAMES = 3840;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
