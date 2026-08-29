export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  conceptHistory: scene(0, 252),
  naturePriority: scene(252, 240),
  legalizationDuality: scene(492, 252),
} as const;

export const DURATION_FRAMES = 744;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
