export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  methodSources: scene(0, 390),
  hermeneuticCircle: scene(390, 285),
  rankOrder: scene(675, 360),
  institutionalSystem: scene(1035, 375),
  formalBoundary: scene(1410, 345),
} as const;

export const DURATION_FRAMES = 1755;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
