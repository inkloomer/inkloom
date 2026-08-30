export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  petitionMercy: scene(0, 252),
  concealSpring: scene(252, 264),
  autumnWinter: scene(516, 228),
} as const;

export const DURATION_FRAMES = 744;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
