export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  connections: scene(0, 264),
  differences: scene(264, 264),
  natureDebate: scene(528, 240),
  evolution: scene(768, 264),
} as const;

export const DURATION_FRAMES = 1032;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
