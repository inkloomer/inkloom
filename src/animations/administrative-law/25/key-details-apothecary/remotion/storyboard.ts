export const FPS = 60;
export const SCENES = {
  "fee-drawer-triad": { start: 0, duration: 450, previewEndTrimFrames: 0 },
  "oral-form-gate": { start: 450, duration: 450, previewEndTrimFrames: 0 },
  "announcement-shelf": { start: 900, duration: 460, previewEndTrimFrames: 0 },
  "seal-drawer-quartet": { start: 1360, duration: 450, previewEndTrimFrames: 0 },
  "signature-herb-ledger": { start: 1810, duration: 460, previewEndTrimFrames: 0 },
  "recording-headcount-lock": { start: 2270, duration: 460, previewEndTrimFrames: 0 },
  "exclusion-tier-stair": { start: 2730, duration: 470, previewEndTrimFrames: 0 },
  "number-scale-penalty": { start: 3200, duration: 450, previewEndTrimFrames: 0 },
  "number-scale-suit-review": { start: 3650, duration: 470, previewEndTrimFrames: 0 },
  "number-scale-remainder": { start: 4120, duration: 460, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 4580;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
