export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  socialComplexityCards: scene(0, 252),
  lawOwnLimitRows: scene(252, 276),
  wrongViewGuards: scene(528, 228),
  inspirationMitigationBench: scene(756, 240),
} as const;

export const DURATION_FRAMES = 996;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
