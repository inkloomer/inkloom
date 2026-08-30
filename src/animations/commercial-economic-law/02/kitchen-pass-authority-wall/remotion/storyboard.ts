export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  authorityLane: scene(0, 300),
  sevenMatters: scene(300, 300),
  expulsionDesk: scene(600, 310),
} as const;

export const DURATION_FRAMES = 910;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
