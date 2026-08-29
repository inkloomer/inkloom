export const FPS = 60;
export const SCENES = {
  "five-thread-loom-wall": { start: 0, duration: 470, previewEndTrimFrames: 0 },
  "conflict-shuttle-lane": { start: 470, duration: 430, previewEndTrimFrames: 0 },
  "referral-gate-unresolved": { start: 900, duration: 420, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1320;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
