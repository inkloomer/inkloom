export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  principleBeaconGrid: scene(0, 250),
  bailResidenceGauges: scene(250, 300),
  detentionClearanceStrip: scene(550, 280),
  arrestHoldshortBay: scene(830, 310),
} as const;

export const DURATION_FRAMES = 1140;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
