export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  disputePremise: scene(0, 264),
  positivistCamp: scene(264, 252),
  nonPositivistCamp: scene(516, 252),
  elementsEvilLaw: scene(768, 300),
} as const;

export const DURATION_FRAMES = 1068;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
