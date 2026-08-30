export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  filing: scene(0, 300),
  rulingRemedy: scene(300, 280),
  executoryLease: scene(580, 290),
} as const;

export const DURATION_FRAMES = 870;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
