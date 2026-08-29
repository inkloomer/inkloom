export const FPS = 60;

export const SCENES = {
  "launcher-shuttles": { start: 0, duration: 480, previewEndTrimFrames: 0 },
  "procedure-weft": { start: 480, duration: 540, previewEndTrimFrames: 0 },
  "result-shelf": { start: 1020, duration: 540, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1560;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
