export const FPS = 60;
export const SCENES = {
  "suit-deadline-matrix": { start: 0, duration: 460, previewEndTrimFrames: 0 },
  "acceptance-verdict-compose": { start: 460, duration: 470, previewEndTrimFrames: 0 },
  "remedy-type-drawer": { start: 930, duration: 420, previewEndTrimFrames: 0 },
  "trial-ordinary-compose-lockup": { start: 1350, duration: 470, previewEndTrimFrames: 0 },
  "summary-procedure-quoin": { start: 1820, duration: 470, previewEndTrimFrames: 0 },
  "second-instance-keyline": { start: 2290, duration: 430, previewEndTrimFrames: 0 },
  "withdrawal-absence-sorting": { start: 2720, duration: 470, previewEndTrimFrames: 0 },
  "advance-execution-dovetail": { start: 3190, duration: 430, previewEndTrimFrames: 0 },
  "mediation-rule-lock": { start: 3620, duration: 440, previewEndTrimFrames: 0 },
  "court-appearance-and-cross-type": { start: 4060, duration: 470, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 4530;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
