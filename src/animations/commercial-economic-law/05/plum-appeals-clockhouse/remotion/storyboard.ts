export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  guarantorTriptych: scene(0, 290),
  defendantCompass: scene(290, 290),
  clepsydraDeadline: scene(580, 290),
} as const;

export const DURATION_FRAMES = 870;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
