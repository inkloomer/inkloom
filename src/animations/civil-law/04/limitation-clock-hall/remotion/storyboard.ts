export const FPS = 60;

export const SCENES = {
  'concept-scope-gate': {start: 0, duration: 720, previewEndTrimFrames: 0},
  'expiry-effect-desk': {start: 720, duration: 640, previewEndTrimFrames: 0},
  'start-points-ladder': {start: 1360, duration: 740, previewEndTrimFrames: 0},
  'suspension-window': {start: 2100, duration: 700, previewEndTrimFrames: 0},
  'interruption-ledger': {start: 2800, duration: 760, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3560;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
