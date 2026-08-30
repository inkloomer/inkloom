export const FPS = 60;

export const SCENES = {
  'agency-power-origin': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'collusion-agency': {start: 700, duration: 620, previewEndTrimFrames: 0},
  'narrow-unauthorized': {start: 1320, duration: 780, previewEndTrimFrames: 0},
  'apparent-agency': {start: 2100, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2820;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
