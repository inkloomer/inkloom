export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  allocationFlow: scene(0, 320),
  reserveMath: scene(320, 300),
  reserveTrio: scene(620, 300),
} as const;

export const DURATION_FRAMES = 920;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
