export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  defenseGateChecklist: scene(0, 250),
  timingIntentCases: scene(250, 260),
  defenseLimitsSpecial: scene(510, 260),
  necessityEscapeSide: scene(770, 250),
  matrixConsentRow: scene(1020, 260),
} as const;

export const DURATION_FRAMES = 1280;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
