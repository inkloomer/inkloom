export const FPS = 60;

export const SCENES = {
  "duty-roster-scope": { start: 0, duration: 480, previewEndTrimFrames: 0 },
  "three-reason-banners": { start: 480, duration: 540, previewEndTrimFrames: 0 },
  "decision-review-board": { start: 1020, duration: 560, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1580;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
