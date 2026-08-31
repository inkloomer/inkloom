export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  officialDutyBoard: scene(0, 240),
  credentialForgeBench: scene(240, 240),
  streetSquatStage: scene(480, 240),
  bossDenCounter: scene(720, 240),
  justiceTestimonyHall: scene(960, 240),
  justiceHarborQuay: scene(1200, 240),
  drugDispatchLane: scene(1440, 240),
  viceBrocadeRoom: scene(1680, 240),
  lawsuitExecution: scene(1920, 250),
  heritageBorderHealth: scene(2170, 250),
  environmentCrimes: scene(2420, 250),
  contrabandWording: scene(2670, 250),
} as const;

export const DURATION_FRAMES = 2920;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
