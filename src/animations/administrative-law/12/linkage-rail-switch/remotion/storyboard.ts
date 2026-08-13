export const FPS = 60;
const duration = 420;
const dense = 480;
export const SCENES = {
  "three-mode-overview": { start: 0, duration, previewEndTrimFrames: 0 },
  "free-choice-track": { start: 420, duration: 480, previewEndTrimFrames: 0 },
  "mandatory-first-track": { start: 900, duration: 480, previewEndTrimFrames: 0 },
  "final-review-track": { start: 1380, duration: 420, previewEndTrimFrames: 0 },
  "switchyard-traps": { start: 1800, duration: 480, previewEndTrimFrames: 0 },
} as const;
export const DURATION_FRAMES = 2280;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
