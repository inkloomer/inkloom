export const FPS = 60;

export const SCENES = {
  "admission-conditions-scales": { start: 0, duration: 600, previewEndTrimFrames: 0 },
  "three-stage-leniency-chain": { start: 600, duration: 570, previewEndTrimFrames: 0 },
  "negotiable-boundary-performance": { start: 1170, duration: 570, previewEndTrimFrames: 0 },
  "substitute-settlement-withdrawal": { start: 1740, duration: 630, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 2370;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
