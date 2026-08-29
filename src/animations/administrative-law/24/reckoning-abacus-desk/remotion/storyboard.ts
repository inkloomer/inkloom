export const FPS = 60;
export const SCENES = {
  "imputation-abacus-frame": { start: 0, duration: 480, previewEndTrimFrames: 0 },
  "administrative-claim-desk": { start: 480, duration: 520, previewEndTrimFrames: 0 },
  "judicial-compensation-gate": { start: 1000, duration: 520, previewEndTrimFrames: 0 },
  "indemnity-beads-ledger": { start: 1520, duration: 520, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 2040;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
