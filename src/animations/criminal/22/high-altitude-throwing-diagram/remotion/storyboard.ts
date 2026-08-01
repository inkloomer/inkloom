export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  verticalDirection: scene(0, 180),
  seriousnessGate: scene(180, 195),
  intentExclusion: scene(375, 180),
  concurrenceChoice: scene(555, 210),
} as const;

export const DURATION_FRAMES = 765;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
