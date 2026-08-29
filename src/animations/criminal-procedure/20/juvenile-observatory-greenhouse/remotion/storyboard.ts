export const FPS = 60;

export const SCENES = {
  "entry-conditions-panes": { start: 0, duration: 480, previewEndTrimFrames: 0 },
  "objection-tunnel-split": { start: 480, duration: 560, previewEndTrimFrames: 0 },
  "exit-doors-verdict": { start: 1040, duration: 460, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1500;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
