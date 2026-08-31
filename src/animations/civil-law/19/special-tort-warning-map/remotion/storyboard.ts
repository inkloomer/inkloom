export const FPS = 60;

export const SCENES = {
  'employment-liability-lane': {start: 0, duration: 780, previewEndTrimFrames: 0},
  'pollution-presumption-causeway': {start: 780, duration: 700, previewEndTrimFrames: 0},
  'falling-object-hazard-ladder': {start: 1480, duration: 740, previewEndTrimFrames: 0},
  'animal-guardian-paddock': {start: 2220, duration: 800, previewEndTrimFrames: 0},
  'crossroads-traffic-medical-product': {start: 3020, duration: 840, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 3860;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
