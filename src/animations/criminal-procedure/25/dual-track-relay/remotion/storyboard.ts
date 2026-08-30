export const FPS = 60;

export const SCENES = {
  "filing-leniency-desk": { start: 0, duration: 560, previewEndTrimFrames: 0 },
  "four-measures-panel": { start: 560, duration: 480, previewEndTrimFrames: 0 },
  "detention-depth-gauge": { start: 1040, duration: 560, previewEndTrimFrames: 0 },
  "measure-execution-tracks": { start: 1600, duration: 520, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 2120;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
