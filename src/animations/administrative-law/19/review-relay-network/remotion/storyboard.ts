export const FPS = 60;
export const SCENES = {
  "defendant-relay-station": { start: 0, duration: 450, previewEndTrimFrames: 0 },
  "jurisdiction-deadline-routes": { start: 450, duration: 440, previewEndTrimFrames: 0 },
  "trial-object-burden-ledger": { start: 890, duration: 450, previewEndTrimFrames: 0 },
  "verdict-type-terminal": { start: 1340, duration: 470, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1810;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
