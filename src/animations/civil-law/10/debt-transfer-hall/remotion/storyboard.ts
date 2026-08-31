export const FPS = 60;

export const SCENES = {
  'credit-assignment-flow': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'join-release-fork': {start: 720, duration: 720, previewEndTrimFrames: 0},
  'defence-offset-continuity': {start: 1440, duration: 720, previewEndTrimFrames: 0},
  'non-transferable-series': {start: 2160, duration: 540, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2700;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
