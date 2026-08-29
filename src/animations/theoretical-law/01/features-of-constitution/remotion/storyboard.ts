export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  fundamentalLaw: scene(0, 264),
  charterQuote: scene(264, 240),
  boundaryFundamentals: scene(504, 252),
} as const;

export const DURATION_FRAMES = 756;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
