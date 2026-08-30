export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  conductDeceptionGate: scene(0, 260),
  aggravatedResultChain: scene(260, 250),
  fictionConversionGate: scene(510, 290),
  fourBranchLoom: scene(800, 320),
  debtDetentionNotice: scene(1120, 300),
} as const;

export const DURATION_FRAMES = 1420;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
