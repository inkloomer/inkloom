export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  mediationScope: scene(0, 210),
  agreementReview: scene(210, 225),
  signatureEffect: scene(435, 210),
  settlementExits: scene(645, 195),
} as const;

export const DURATION_FRAMES = 840;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
