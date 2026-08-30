export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  review: scene(0, 264),
  refundLitigation: scene(264, 228),
} as const;

export const DURATION_FRAMES = 492;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
