export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  stageBoundary: scene(0, 230),
  examCommencementMap: scene(230, 350),
  specialCasesLane: scene(580, 250),
} as const;

export const DURATION_FRAMES = 830;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
