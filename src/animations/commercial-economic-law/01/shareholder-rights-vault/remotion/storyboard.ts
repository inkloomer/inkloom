export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  inspection: scene(0, 320),
  validityFunnel: scene(320, 320),
  claimDesk: scene(640, 320),
} as const;

export const DURATION_FRAMES = 960;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
