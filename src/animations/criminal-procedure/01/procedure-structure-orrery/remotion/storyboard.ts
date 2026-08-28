export const FPS = 60;

export const SCENES = {
  "purpose-chain-gears": { start: 0, duration: 500, previewEndTrimFrames: 0 },
  "four-construction-quadrants": { start: 500, duration: 720, previewEndTrimFrames: 0 },
  "separation-two-step-gate": { start: 1220, duration: 560, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1780;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
