export const FPS = 60;
const duration = 420;
const dense = 480;
export const SCENES = {
  "defendant-general-board": { start: 0, duration: dense, previewEndTrimFrames: 0 },
  "defendant-special-routes": { start: 480, duration: dense, previewEndTrimFrames: 0 },
  "defendant-gov-rules": { start: 960, duration: dense, previewEndTrimFrames: 0 },
  "defendant-after-review": { start: 1440, duration: dense, previewEndTrimFrames: 0 },
  "plaintiff-concept-lantern": { start: 1920, duration: dense, previewEndTrimFrames: 0 },
  "related-party-five-ties": { start: 2400, duration: 480, previewEndTrimFrames: 0 },
  "organization-plaintiffs": { start: 2880, duration: 480, previewEndTrimFrames: 0 },
  "third-party-seat": { start: 3360, duration: 480, previewEndTrimFrames: 0 },
  "jurisdiction-floors": { start: 3840, duration: 480, previewEndTrimFrames: 0 },
  "territorial-steps": { start: 4320, duration: 480, previewEndTrimFrames: 0 },
  "representative-desk": { start: 4800, duration: 420, previewEndTrimFrames: 0 },
} as const;
export const DURATION_FRAMES = 5220;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
