export const FPS = 60;
export const SCENES = {
  "info-definition-scope": { start: 0, duration: 420, previewEndTrimFrames: 0 },
  "disclosure-subject-matrix": { start: 420, duration: 450, previewEndTrimFrames: 0 },
  "nondisclosure-tier-matrix": { start: 870, duration: 480, previewEndTrimFrames: 0 },
  "active-disclosure-scope-clock": { start: 1350, duration: 420, previewEndTrimFrames: 0 },
  "active-channels-venues": { start: 1770, duration: 420, previewEndTrimFrames: 0 },
  "application-intake-rules": { start: 2190, duration: 450, previewEndTrimFrames: 0 },
  "response-deadline-clock": { start: 2640, duration: 450, previewEndTrimFrames: 0 },
  "response-classification-matrix": { start: 3090, duration: 480, previewEndTrimFrames: 0 },
  "special-application-router": { start: 3570, duration: 480, previewEndTrimFrames: 0 },
  "exam-traps-verdict": { start: 4050, duration: 480, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 4530;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
