export const FPS = 60;
export const SCENES = {
  "power-prism-dispersion": { start: 0, duration: 450, previewEndTrimFrames: 0 },
  "levy-requisition-kinetic-balance": { start: 450, duration: 500, previewEndTrimFrames: 0 },
  "adjudication-field-confirmation-scanner": { start: 950, duration: 500, previewEndTrimFrames: 0 },
  "welfare-hydraulics-merit-launcher": { start: 1450, duration: 500, previewEndTrimFrames: 0 },
  "exam-radar-steel-verdict": { start: 1950, duration: 500, previewEndTrimFrames: 0 },
} as const;
export const DURATION_FRAMES = 2450;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
