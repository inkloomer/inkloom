export const FPS = 60;

export const SCENES = {
  'guarantee-system-bench': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'counter-guarantee-invalidity': {start: 720, duration: 760, previewEndTrimFrames: 0},
  'subordinate-liability-changes': {start: 1480, duration: 800, previewEndTrimFrames: 0},
  'joint-guarantee-hall': {start: 2280, duration: 780, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3060;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
