export const FPS = 60;

export const SCENES = {
  'joint-tort-three-types': {start: 0, duration: 760, previewEndTrimFrames: 0},
  'combination-axis-split': {start: 760, duration: 700, previewEndTrimFrames: 0},
  'five-case-decision-tree': {start: 1460, duration: 820, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2280;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
