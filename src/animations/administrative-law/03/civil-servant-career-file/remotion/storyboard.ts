export const FPS = 60;

export const SCENES = {
  'identity-dual-ladder': {start: 0, duration: 360, previewEndTrimFrames: 0},
  'appointment-entry-doors': {start: 360, duration: 390, previewEndTrimFrames: 0},
  'exam-recruitment-runway': {start: 750, duration: 480, previewEndTrimFrames: 0},
  'contract-dossier': {start: 1230, duration: 450, previewEndTrimFrames: 0},
  'exchange-route-map': {start: 1680, duration: 420, previewEndTrimFrames: 0},
  'resignation-countdown-gate': {start: 2100, duration: 390, previewEndTrimFrames: 0},
  'dismissal-retirement-balance': {start: 2490, duration: 510, previewEndTrimFrames: 0},
  'discipline-boundary-scale': {start: 3000, duration: 420, previewEndTrimFrames: 0},
  'appeal-scope-selector': {start: 3420, duration: 420, previewEndTrimFrames: 0},
  'review-appeal-fork': {start: 3840, duration: 450, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 4290;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
