export const FPS = 60;

export const SCENES = {
  "unlawful-grading": { start: 0, duration: 450, previewEndTrimFrames: 0 },
  "intentional-confession-routes": { start: 450, duration: 720, previewEndTrimFrames: 0 },
  "correction-fork-gate": { start: 1170, duration: 420, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1590;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
