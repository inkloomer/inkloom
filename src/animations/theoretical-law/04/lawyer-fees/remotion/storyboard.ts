export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  principlesStandard: scene(0, 252),
  riskMode: scene(252, 264),
  collectSupervise: scene(516, 252),
} as const;

export const DURATION_FRAMES = 768;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
