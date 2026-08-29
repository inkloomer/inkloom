export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  conflictArenas: scene(0, 240),
  rankPrinciple: scene(240, 264),
  proportionPrinciple: scene(504, 240),
  valueFieldLimits: scene(744, 252),
} as const;

export const DURATION_FRAMES = 996;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
