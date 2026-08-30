export const FPS = 60;

export const SCENES = {
  'concept-legal-element': {start: 0, duration: 700, previewEndTrimFrames: 0},
  'subjective-objective-bench': {start: 700, duration: 700, previewEndTrimFrames: 0},
  'special-three-scenes': {start: 1400, duration: 700, previewEndTrimFrames: 0},
  'effects-samaritan': {start: 2100, duration: 760, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 2860;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
