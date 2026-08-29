export const FPS = 60;
export const SCENES = {
  "party-and-defendant-trays": { start: 0, duration: 470, previewEndTrimFrames: 0 },
  "acceptance-screening-bath": { start: 470, duration: 470, previewEndTrimFrames: 0 },
  "burden-developing-pan": { start: 940, duration: 460, previewEndTrimFrames: 0 },
  "verdict-four-troughs": { start: 1400, duration: 480, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 1880;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
