export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  filingAuthoritySplit: scene(0, 280),
  trialJurisdictionLadder: scene(280, 285),
  specialVenueLedger: scene(565, 300),
} as const;

export const DURATION_FRAMES = 865;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
