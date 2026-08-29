export const FPS = 60;
export const SCENES = {
  "proposer-and-civil-compare": { start: 0, duration: 430, previewEndTrimFrames: 0 },
  "three-step-beam-path": { start: 430, duration: 480, previewEndTrimFrames: 0 },
  "mnemonic-light-signal": { start: 910, duration: 400, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1310;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
