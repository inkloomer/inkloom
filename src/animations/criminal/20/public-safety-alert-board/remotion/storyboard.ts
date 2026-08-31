export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  meaningFireRulers: scene(0, 260),
  dangerMethodsFloor: scene(260, 300),
  trafficAccidentWard: scene(560, 300),
  drivingGunsSafety: scene(860, 300),
  terrorAlertWard: scene(1160, 290),
  interfereDrivingPanel: scene(1450, 300),
  gunFactorySafety: scene(1750, 300),
} as const;

export const DURATION_FRAMES = 2050;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
