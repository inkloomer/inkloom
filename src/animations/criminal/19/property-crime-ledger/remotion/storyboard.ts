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
  robberyAggravationBoard: scene(1880, 310),
  extortionNoticeFlow: scene(2190, 290),
  extortionFreedomSpectrum: scene(2480, 300),
  exerciseRightGate: scene(2780, 290),
  minorDamageMisuse: scene(3070, 300),
  minorFundsWages: scene(3370, 290),
  completionControlLattice: scene(3660, 290),
} as const;

export const DURATION_FRAMES = 3950;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
