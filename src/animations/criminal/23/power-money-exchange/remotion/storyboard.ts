export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  embezzlementElements: scene(0, 240),
  embezzlementVerdict: scene(240, 240),
  misuseFundLane: scene(480, 240),
  briberyTradeDesk: scene(720, 240),
  briberyVerdictFloor: scene(960, 240),
  influenceTrioMap: scene(1200, 240),
} as const;

export const DURATION_FRAMES = 1440;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
