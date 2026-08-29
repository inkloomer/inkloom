export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  threeElementsFlow: scene(0, 276),
  ruleVsTextLedger: scene(276, 252),
  classificationAxes: scene(528, 276),
  omissionMnemonic: scene(804, 228),
} as const;

export const DURATION_FRAMES = 1032;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
