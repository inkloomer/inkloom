export const FPS = 60;

export const SCENES = {
  'condition-triptych': {start: 0, duration: 560, previewEndTrimFrames: 0},
  'formation-consent-gate': {start: 560, duration: 620, previewEndTrimFrames: 0},
  'termination-fork': {start: 1180, duration: 600, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 1780;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
