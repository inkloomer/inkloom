export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  interestThreeModels: scene(0, 260),
  possessionPurposeWard: scene(260, 250),
  theftTransferPeace: scene(510, 260),
  robberyCoercionSteps: scene(770, 260),
  fraudExtortionSplit: scene(1030, 260),
  embezzlementTrustLedger: scene(1290, 290),
  snatchViolenceLane: scene(1580, 300),
  robberyAggravationBoard: scene(1880, 300),
  extortionWillFreedom: scene(2180, 290),
  minorCrimesCompletion: scene(2470, 290),
  completionControlLattice: scene(2760, 280),
} as const;

export const DURATION_FRAMES = 3040;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
