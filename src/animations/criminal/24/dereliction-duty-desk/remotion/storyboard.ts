export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  abuseNegligenceSplit: scene(0, 260),
  perversionJustice: scene(260, 260),
  ordinaryCrimes: scene(520, 250),
  aidEscapeClassification: scene(770, 280),
  rescueFooddrugTail: scene(1050, 300),
} as const;

export const DURATION_FRAMES = 1350;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
