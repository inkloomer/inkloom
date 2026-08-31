export const FPS = 60;

export const SCENES = {
  'kinship-support-ladder': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'marriage-formation-gate': {start: 700, duration: 720, previewEndTrimFrames: 0},
  'invalidity-procedure-fork': {start: 1420, duration: 680, previewEndTrimFrames: 0},
  'revocable-marriage-lane': {start: 2100, duration: 780, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2880;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
