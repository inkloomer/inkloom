export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  actFeaturesTriTest: scene(0, 250),
  victimSelfRiskFork: scene(250, 260),
  omissionFamilyMap: scene(510, 250),
  dutyStreamSources: scene(760, 260),
  abilityErrorGate: scene(1020, 260),
} as const;

export const DURATION_FRAMES = 1280;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
