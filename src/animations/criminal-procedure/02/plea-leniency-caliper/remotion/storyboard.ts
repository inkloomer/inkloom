export const FPS = 60;

export const SCENES = {
  "stage-scope-tape": { start: 0, duration: 500, previewEndTrimFrames: 0 },
  "triple-bench-boundaries": { start: 500, duration: 660, previewEndTrimFrames: 0 },
  "deed-signing-desk": { start: 1160, duration: 620, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1780;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
