export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  preservationTrigger: scene(0, 165),
  duringLitigation: scene(165, 195),
  beforeLitigation: scene(360, 225),
} as const;

export const DURATION_FRAMES = 585;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
