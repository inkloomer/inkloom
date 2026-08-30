export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  lifeBodyWard: scene(0, 260),
  sexualAutonomyWard: scene(260, 260),
  unlawfulDetentionWard: scene(520, 260),
  kidnappingPurposeWard: scene(780, 260),
  trafficSellPurposeWard: scene(1040, 260),
} as const;

export const DURATION_FRAMES = 1300;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
