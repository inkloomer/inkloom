export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  capitalRise: scene(0, 300),
  unevenCut: scene(300, 300),
  paperCut: scene(600, 290),
} as const;

export const DURATION_FRAMES = 890;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
