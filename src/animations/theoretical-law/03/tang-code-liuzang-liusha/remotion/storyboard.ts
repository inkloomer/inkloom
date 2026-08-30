export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  liuzang: scene(0, 264),
  liusha: scene(264, 264),
  evolution: scene(528, 240),
} as const;

export const DURATION_FRAMES = 768;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
