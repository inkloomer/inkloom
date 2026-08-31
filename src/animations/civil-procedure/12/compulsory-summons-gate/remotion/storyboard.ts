export const FPS = 60;
export const SCENES = {
  "summons-gate-checkline": { start: 0, duration: 460, previewEndTrimFrames: 0 },
  "fine-detention-desk": { start: 460, duration: 440, previewEndTrimFrames: 0 },
  "unit-measures-fork": { start: 900, duration: 430, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1330;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
