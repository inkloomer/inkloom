export const FPS = 60;

export const SCENES = {
  'intention-expression-anatomy': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'agreement-fork': {start: 660, duration: 680, previewEndTrimFrames: 0},
  'sham-hidden-jest': {start: 1340, duration: 760, previewEndTrimFrames: 0},
  'practice-act-delivery': {start: 2100, duration: 700, previewEndTrimFrames: 0},
  'formal-act-dual-path': {start: 2800, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3520;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
