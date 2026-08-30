export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  features: scene(0, 264),
  assemblies: scene(264, 312),
  committees: scene(576, 336),
} as const;

export const DURATION_FRAMES = 912;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
