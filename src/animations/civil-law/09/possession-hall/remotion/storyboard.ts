export const FPS = 60;

export const SCENES = {
  'possession-basics': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'entitled-vs-unentitled': {start: 720, duration: 720, previewEndTrimFrames: 0},
  'possession-protection': {start: 1440, duration: 660, previewEndTrimFrames: 0},
  'unentitled-return': {start: 2100, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2820;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
