export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  definitionAnatomy: scene(0, 264),
  causeChoice: scene(264, 252),
  boundaryNotes: scene(516, 264),
} as const;

export const DURATION_FRAMES = 780;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
