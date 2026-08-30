export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  concept: scene(0, 264),
  organs: scene(264, 240),
  mnemonics: scene(504, 264),
} as const;

export const DURATION_FRAMES = 768;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
