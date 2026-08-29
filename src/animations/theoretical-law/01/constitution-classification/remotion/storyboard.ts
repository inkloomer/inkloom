export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  writtenUnwritten: scene(0, 252),
  rigidFlexible: scene(252, 240),
  sovereignForms: scene(492, 264),
} as const;

export const DURATION_FRAMES = 756;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
