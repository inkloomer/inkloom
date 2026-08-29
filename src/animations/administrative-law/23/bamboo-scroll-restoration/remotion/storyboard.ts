export const FPS = 60;
export const SCENES = {
  "review-authority-bamboo-wall": { start: 0, duration: 480, previewEndTrimFrames: 0 },
  "procedure-slips-lane": { start: 480, duration: 500, previewEndTrimFrames: 0 },
  "summary-slips-drawer": { start: 980, duration: 430, previewEndTrimFrames: 0 },
  "special-slips-conservation": { start: 1410, duration: 480, previewEndTrimFrames: 0 },
  "incidental-review-desk": { start: 1890, duration: 500, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 2390;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
