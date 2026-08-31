export const FPS = 60;

export const SCENES = {
  'tort-definition-bench': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'principle-switchboard': {start: 700, duration: 720, previewEndTrimFrames: 0},
  'damages-twin-bench': {start: 1420, duration: 760, previewEndTrimFrames: 0},
  'claim-fork-immunity-gates': {start: 2180, duration: 720, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2900;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
