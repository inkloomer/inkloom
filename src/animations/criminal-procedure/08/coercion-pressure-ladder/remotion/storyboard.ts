export const FPS = 60;

export const SCENES = {
  "pressure-ladder-overview": { start: 0, duration: 480, previewEndTrimFrames: 0 },
  "bail-valve-panel": { start: 480, duration: 560, previewEndTrimFrames: 0 },
  "arrest-gauge-board": { start: 1040, duration: 540, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1580;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
