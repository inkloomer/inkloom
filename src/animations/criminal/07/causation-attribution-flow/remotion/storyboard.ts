export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  causeGateThreeUses: scene(0, 250),
  effectGateThreeChecks: scene(250, 260),
  intervenerTwoStep: scene(510, 250),
  intervenerCaseRows: scene(760, 250),
  unascertainableFog: scene(1010, 250),
} as const;

export const DURATION_FRAMES = 1260;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
