export const FPS = 60;

export const SCENES = {
  'liability-duality': {start: 0, duration: 620, previewEndTrimFrames: 0},
  'representation-vs-agency': {start: 620, duration: 680, previewEndTrimFrames: 0},
  'representative-act-vs-personal': {start: 1300, duration: 680, previewEndTrimFrames: 0},
  'ultra-vires-representation': {start: 1980, duration: 760, previewEndTrimFrames: 0},
  'branch-and-split': {start: 2740, duration: 760, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3500;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
