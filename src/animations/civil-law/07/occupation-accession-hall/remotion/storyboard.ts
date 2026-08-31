export const FPS = 60;

export const SCENES = {
  'occupation-lane': {start: 0, duration: 660, previewEndTrimFrames: 0},
  'accession-fork': {start: 660, duration: 540, previewEndTrimFrames: 0},
  'accession-verdicts': {start: 1200, duration: 480, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 1680;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
