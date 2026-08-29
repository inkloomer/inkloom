export const FPS = 60;

export const SCENES = {
  "vertical-lines-compare": { start: 0, duration: 540, previewEndTrimFrames: 0 },
  "investigation-organs-map": { start: 540, duration: 560, previewEndTrimFrames: 0 },
  "procuratorate-rules-route": { start: 1100, duration: 640, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1740;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
