export const FPS = 60;

export const SCENES = {
  "three-forms-bench": { start: 0, duration: 520, previewEndTrimFrames: 0 },
  "assessor-qualification-desk": { start: 520, duration: 480, previewEndTrimFrames: 0 },
  "seven-bench-powers": { start: 1000, duration: 500, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1500;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
