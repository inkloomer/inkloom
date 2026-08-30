export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  exclusionGateLanes: scene(0, 295),
  dataConversionDesk: scene(295, 285),
  reviewCheckpoints: scene(580, 280),
} as const;

export const DURATION_FRAMES = 860;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
