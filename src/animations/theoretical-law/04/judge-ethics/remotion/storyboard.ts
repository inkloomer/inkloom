export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  coreLoyalty: scene(0, 240),
  justice: scene(240, 264),
  cleanPeopleImage: scene(504, 276),
} as const;

export const DURATION_FRAMES = 780;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
