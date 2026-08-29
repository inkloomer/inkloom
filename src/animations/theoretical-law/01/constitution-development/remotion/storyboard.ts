export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  documentsTimeline: scene(0, 264),
  amendmentsEarly: scene(264, 288),
  amendmentsModern: scene(552, 288),
  amendment2018: scene(840, 288),
  mnemonics: scene(1128, 240),
} as const;

export const DURATION_FRAMES = 1368;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
