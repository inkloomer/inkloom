export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  authorizationFork: scene(0, 120),
  specialAuthorization: scene(120, 120),
  mediationBoundary: scene(240, 120),
  stageBoundary: scene(360, 120),
} as const;

export const DURATION_FRAMES = 480;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
