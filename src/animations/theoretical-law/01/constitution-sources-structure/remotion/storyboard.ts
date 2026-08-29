export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  sourcesFive: scene(0, 276),
  codexStructure: scene(276, 264),
  verdictBoard: scene(540, 240),
} as const;

export const DURATION_FRAMES = 780;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
