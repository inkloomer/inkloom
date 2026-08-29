export const FPS = 60;

export const SCENES = {
  "report-windows-compare": { start: 0, duration: 440, previewEndTrimFrames: 0 },
  "filing-gate-conditions": { start: 440, duration: 480, previewEndTrimFrames: 0 },
  "supervision-fork-roads": { start: 920, duration: 480, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1400;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
