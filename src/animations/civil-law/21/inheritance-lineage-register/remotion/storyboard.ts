export const FPS = 60;

export const SCENES = {
  'heir-order-kinship': {start: 0, duration: 600, previewEndTrimFrames: 0},
  'loss-waiver-rights': {start: 600, duration: 580, previewEndTrimFrames: 0},
  'representation-transmission': {start: 1180, duration: 660, previewEndTrimFrames: 0},
  'will-forms-validity': {start: 1840, duration: 640, previewEndTrimFrames: 0},
  'bequest-agreement-debts': {start: 2480, duration: 620, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3100;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
