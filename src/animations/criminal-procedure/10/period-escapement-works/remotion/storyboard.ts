export const FPS = 60;

export const SCENES = {
  "counting-units-gears": { start: 0, duration: 460, previewEndTrimFrames: 0 },
  "recalc-special-cases": { start: 460, duration: 500, previewEndTrimFrames: 0 },
  "service-modes-board": { start: 960, duration: 500, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1460;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
