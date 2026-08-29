export const FPS = 60;

export const SCENES = {
  "four-berth-dispatch": { start: 0, duration: 500, previewEndTrimFrames: 0 },
  "document-belt": { start: 500, duration: 460, previewEndTrimFrames: 0 },
  "trap-board": { start: 960, duration: 460, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1420;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
