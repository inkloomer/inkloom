export const FPS = 60;

export const SCENES = {
  'creation-publicity-gate': {start: 0, duration: 690, previewEndTrimFrames: 0},
  'limitation-fate-split': {start: 690, duration: 600, previewEndTrimFrames: 0},
  'priority-ladder-gate': {start: 1290, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2010;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
