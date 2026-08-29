export const FPS = 60;

export const SCENES = {
  "party-scope-berths": { start: 0, duration: 500, previewEndTrimFrames: 0 },
  "material-loss-gate": { start: 500, duration: 460, previewEndTrimFrames: 0 },
  "preservation-fork": { start: 960, duration: 480, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1440;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
