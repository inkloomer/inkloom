export const FPS = 60;

export const SCENES = {
  'missing-person-bench': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'property-custodian-desk': {start: 700, duration: 660, previewEndTrimFrames: 0},
  'death-declaration-gate': {start: 1360, duration: 740, previewEndTrimFrames: 0},
  'death-effects-fork': {start: 2100, duration: 640, previewEndTrimFrames: 0},
  'rescission-verdict-wall': {start: 2740, duration: 760, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3500;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
