export const FPS = 60;
export const SCENES = {
  "first-instance-gear-trio": { start: 0, duration: 470, previewEndTrimFrames: 0 },
  "revocation-special-gear-train": { start: 470, duration: 470, previewEndTrimFrames: 0 },
  "review-verdict-matrix-board": { start: 940, duration: 480, previewEndTrimFrames: 0 },
  "second-instance-verdict-dial": { start: 1420, duration: 450, previewEndTrimFrames: 0 },
  "announcement-publicity-panel": { start: 1870, duration: 420, previewEndTrimFrames: 0 },
  "execution-mechanism-board": { start: 2290, duration: 470, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 2760;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
