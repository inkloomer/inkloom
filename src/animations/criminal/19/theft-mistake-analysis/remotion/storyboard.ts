export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  awarenessAlignment: scene(0, 180),
  penaltyTier: scene(180, 180),
  attemptRisk: scene(360, 180),
  aggravatedAttempt: scene(540, 210),
} as const;

export const DURATION_FRAMES = 750;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
