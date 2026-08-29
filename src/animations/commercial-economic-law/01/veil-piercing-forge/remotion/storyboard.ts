export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  piercingGrounds: scene(0, 300),
  suitStructure: scene(300, 330),
  trianglePierce: scene(630, 300),
} as const;

export const DURATION_FRAMES = 930;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
