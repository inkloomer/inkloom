export const FPS = 60;

export const SCENES = {
  "disposition-camp": { start: 0, duration: 460, previewEndTrimFrames: 0 },
  "remand-routes": { start: 460, duration: 460, previewEndTrimFrames: 0 },
  "special-effect-points": { start: 920, duration: 480, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1400;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
