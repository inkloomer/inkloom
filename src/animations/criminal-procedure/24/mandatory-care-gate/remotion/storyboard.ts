export const FPS = 60;

export const SCENES = {
  "entry-conditions-organs": { start: 0, duration: 520, previewEndTrimFrames: 0 },
  "identity-launch-fork": { start: 520, duration: 520, previewEndTrimFrames: 0 },
  "trial-rule-rows": { start: 1040, duration: 560, previewEndTrimFrames: 0 },
  "outcome-relief-release": { start: 1600, duration: 640, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 2240;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
