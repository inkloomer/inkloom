export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  recalcFourVents: scene(0, 265),
  appealClockTimeline: scene(265, 285),
  mailRecoveryRules: scene(550, 260),
} as const;

export const DURATION_FRAMES = 810;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
