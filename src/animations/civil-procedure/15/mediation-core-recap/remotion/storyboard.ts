export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  coreMap: scene(0, 340),
  judgmentRules: scene(340, 240),
  thirdPartyRules: scene(580, 240),
  guaranteeRules: scene(820, 250),
} as const;

export const DURATION_FRAMES = 1070;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
