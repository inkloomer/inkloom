export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  redLine: scene(0, 290),
  fourErrors: scene(290, 300),
  noticeDesk: scene(590, 290),
} as const;

export const DURATION_FRAMES = 880;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
