export const FPS = 60;
export const SCENES = {
  "eight-evidence-vitrine-hall": { start: 0, duration: 500, previewEndTrimFrames: 0 },
  "digital-vs-analog-compare": { start: 500, duration: 420, previewEndTrimFrames: 0 },
  "burden-of-proof-ledger": { start: 920, duration: 470, previewEndTrimFrames: 0 },
  "deadline-and-supplement-vitrine": { start: 1390, duration: 450, previewEndTrimFrames: 0 },
  "evidence-collection-desk": { start: 1840, duration: 460, previewEndTrimFrames: 0 },
  "cross-exam-and-verdict-hall": { start: 2300, duration: 500, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 2800;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
