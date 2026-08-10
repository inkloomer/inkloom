export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  scopeAndChapterSpine: scene(0, 360),
  formationAndEffect: scene(360, 420),
  performanceAndPreservation: scene(780, 420),
  changeTerminationAndBreach: scene(1200, 420),
  threeSubdivisionMap: scene(1620, 360),
  typicalContractFamilies: scene(1980, 420),
  quasiContractRestitution: scene(2400, 360),
} as const;

export const DURATION_FRAMES = 2760;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
