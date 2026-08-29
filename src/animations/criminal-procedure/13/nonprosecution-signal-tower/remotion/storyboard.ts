export const FPS = 60;

export const SCENES = {
  "three-kinds-arms": { start: 0, duration: 520, previewEndTrimFrames: 0 },
  "procedure-gates": { start: 520, duration: 540, previewEndTrimFrames: 0 },
  "relief-fork-tower": { start: 1060, duration: 500, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1560;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
