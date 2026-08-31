export const FPS = 60;

export const SCENES = {
  'heir-sequence-lanes': {start: 0, duration: 640, previewEndTrimFrames: 0},
  'forfeiture-renunciation-split': {start: 640, duration: 700, previewEndTrimFrames: 0},
  'representation-transfer-chain': {start: 1340, duration: 780, previewEndTrimFrames: 0},
  'will-forms-validity-gate': {start: 2120, duration: 820, previewEndTrimFrames: 0},
  'legacy-agreement-priority': {start: 2940, duration: 680, previewEndTrimFrames: 0},
  'estate-settlement-lane': {start: 3620, duration: 840, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 4460;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
