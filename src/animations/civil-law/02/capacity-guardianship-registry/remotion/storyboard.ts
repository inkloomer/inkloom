export const FPS = 60;

export const SCENES = {
  'capacity-birth-death-gate': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'capacity-three-tier-bench': {start: 700, duration: 720, previewEndTrimFrames: 0},
  'guardianship-will-forks': {start: 1420, duration: 760, previewEndTrimFrames: 0},
  'guardianship-order-ladder': {start: 2180, duration: 700, previewEndTrimFrames: 0},
  'guardianship-duty-verdicts': {start: 2880, duration: 660, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3540;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
