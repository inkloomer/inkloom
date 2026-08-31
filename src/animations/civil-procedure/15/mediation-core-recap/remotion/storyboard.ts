export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  coreMap: scene(0, 300),
  judgmentRules: scene(300, 240),
  thirdPartyRules: scene(540, 240),
  guaranteeRules: scene(780, 250),
} as const;

export const DURATION_FRAMES = 1030;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
