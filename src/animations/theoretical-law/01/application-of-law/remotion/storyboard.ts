export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  goalSteps: scene(0, 276),
  discoveryArgument: scene(276, 264),
  justification: scene(540, 276),
} as const;

export const DURATION_FRAMES = 816;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
