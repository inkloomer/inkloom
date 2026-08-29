export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  conceptScope: scene(0, 264),
  constitutionItems: scene(264, 288),
  examFocus: scene(552, 240),
} as const;

export const DURATION_FRAMES = 792;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
