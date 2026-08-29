export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  disputePremise: scene(0, 276),
  positivistCamp: scene(276, 252),
  nonPositivistCamp: scene(528, 252),
  elementsEvilLaw: scene(780, 300),
} as const;

export const DURATION_FRAMES = 1080;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
