export const FPS = 60;
const duration = 420;
const dense = 480;
export const SCENES = {
  "case-mainline": { start: 0, duration, previewEndTrimFrames: 0 },
  "plaintiff-gate": { start: 420, duration, previewEndTrimFrames: 0 },
  "defendant-routing": { start: 840, duration: dense, previewEndTrimFrames: 0 },
  "admission-tray": { start: 1320, duration, previewEndTrimFrames: 0 },
  "rejection-gate": { start: 1740, duration: dense, previewEndTrimFrames: 0 },
  "trial-desk": { start: 2220, duration, previewEndTrimFrames: 0 },
  "defendant-proof-scale": { start: 2640, duration: dense, previewEndTrimFrames: 0 },
  "plaintiff-proof-scale": { start: 3120, duration, previewEndTrimFrames: 0 },
  "judgment-seals": { start: 3540, duration: dense, previewEndTrimFrames: 0 },
  "trap-quiz": { start: 4020, duration: dense, previewEndTrimFrames: 0 },
  "privacy-case": { start: 4500, duration: dense, previewEndTrimFrames: 0 },
} as const;
export const DURATION_FRAMES = 4980;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
