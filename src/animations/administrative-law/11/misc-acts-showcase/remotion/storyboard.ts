export const FPS = 60;
const duration = 420;
export const SCENES = {
  "six-act-showcase": { start: 0, duration, previewEndTrimFrames: 0 },
  "levy-vs-requisition": { start: 420, duration, previewEndTrimFrames: 0 },
  "adjudication-vs-confirmation": { start: 840, duration: 480, previewEndTrimFrames: 0 },
  "grant-vs-award": { start: 1320, duration: 480, previewEndTrimFrames: 0 },
  "mnemonic-recap": { start: 1800, duration: 420, previewEndTrimFrames: 0 },
} as const;
export const DURATION_FRAMES = 2220;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
