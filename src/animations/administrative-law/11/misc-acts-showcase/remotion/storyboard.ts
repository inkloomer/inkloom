export const FPS = 60;
export const SCENES = {
  "power-prism-dispersion": { start: 0, duration: 620, previewEndTrimFrames: 0 },
  "levy-requisition-kinetic-balance": { start: 620, duration: 580, previewEndTrimFrames: 0 },
  "adjudication-field-confirmation-scanner": { start: 1200, duration: 620, previewEndTrimFrames: 0 },
  "welfare-hydraulics-merit-launcher": { start: 1820, duration: 580, previewEndTrimFrames: 0 },
  "exam-radar-steel-verdict": { start: 2400, duration: 600, previewEndTrimFrames: 0 },
} as const;
export const DURATION_FRAMES = 3000;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
