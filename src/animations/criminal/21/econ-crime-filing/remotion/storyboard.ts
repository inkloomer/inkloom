export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  productionSmuggling: scene(0, 260),
  creditCardFraud: scene(260, 280),
  moneyLaunderingTax: scene(540, 260),
  insuranceLoanFraud: scene(800, 260),
  companyOrder: scene(1060, 260),
  currencyNotes: scene(1320, 260),
  taxRebateFund: scene(1580, 260),
  ipCrimes: scene(1840, 260),
  marketOrder: scene(2100, 260),
} as const;

export const DURATION_FRAMES = 2360;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
