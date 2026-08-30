export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  powerSplit: scene(0, 288),
  officials: scene(288, 288),
  oathInterpret: scene(576, 288),
} as const;

export const DURATION_FRAMES = 864;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
