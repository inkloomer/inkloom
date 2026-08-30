export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  setupMembers: scene(0, 264),
  dutiesSource: scene(264, 240),
  decideRemedy: scene(504, 288),
} as const;

export const DURATION_FRAMES = 792;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
