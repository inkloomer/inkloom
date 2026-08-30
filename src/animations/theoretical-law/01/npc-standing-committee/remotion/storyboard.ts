export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  composition: scene(0, 276),
  supervisionLegislation: scene(276, 300),
  personnel: scene(576, 288),
  meetingsDecisions: scene(864, 312),
  motions: scene(1176, 300),
} as const;

export const DURATION_FRAMES = 1476;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
