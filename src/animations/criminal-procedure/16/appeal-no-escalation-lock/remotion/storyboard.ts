export const FPS = 60;

export const SCENES = {
  "one-principle-gate": { start: 0, duration: 480, previewEndTrimFrames: 0 },
  "escalation-lanes": { start: 480, duration: 480, previewEndTrimFrames: 0 },
  "concrete-bans-grid": { start: 960, duration: 520, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1480;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
