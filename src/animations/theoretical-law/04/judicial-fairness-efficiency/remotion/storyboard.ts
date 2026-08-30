export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  fairness: scene(0, 276),
  opennessIntegrity: scene(276, 300),
  efficiency: scene(576, 216),
} as const;

export const DURATION_FRAMES = 792;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
