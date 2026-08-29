export const FPS = 60;
export const SCENES = {
  "concept-kind-harbor": { start: 0, duration: 470, previewEndTrimFrames: 0 },
  "dual-nature-masts": { start: 470, duration: 460, previewEndTrimFrames: 0 },
  "validity-tide-gauge": { start: 930, duration: 470, previewEndTrimFrames: 0 },
  "jurisdiction-tide-chart": { start: 1400, duration: 460, previewEndTrimFrames: 0 },
  "review-mast-split": { start: 1860, duration: 470, previewEndTrimFrames: 0 },
  "verdict-dock-berths": { start: 2330, duration: 480, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 2810;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
