export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  conceptFeatures: scene(0, 252),
  syllogismDeduction: scene(252, 240),
  inductiveAnalogy: scene(492, 276),
  abductiveReverseAFortiori: scene(768, 300),
  verdictMap: scene(1068, 240),
} as const;

export const DURATION_FRAMES = 1308;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
