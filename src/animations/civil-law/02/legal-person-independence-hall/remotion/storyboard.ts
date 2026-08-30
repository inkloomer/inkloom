export const FPS = 60;

export const SCENES = {
  'independence-four-pillars': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'classification-and-foundation': {start: 700, duration: 760, previewEndTrimFrames: 0},
  'registration-and-incubation': {start: 1460, duration: 760, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2220;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
