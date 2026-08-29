export const FPS = 60;

export const SCENES = {
  "level-terrace-gates": { start: 0, duration: 560, previewEndTrimFrames: 0 },
  "territory-main-auxiliary": { start: 560, duration: 500, previewEndTrimFrames: 0 },
  "transfer-designation-board": { start: 1060, duration: 560, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1620;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
