export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  requestArmsAdjustment: scene(0, 330),
  proofAndInvalidWaiver: scene(330, 360),
  firstInstanceClarification: scene(690, 390),
  appellateCompletion: scene(1080, 420),
} as const;

export const DURATION_FRAMES = 1500;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
