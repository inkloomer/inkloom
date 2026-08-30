export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  plaintiffEligibilityHall: scene(0, 250),
  lossScopeGate: scene(250, 260),
  publicInterestTrack: scene(510, 260),
} as const;

export const DURATION_FRAMES = 770;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
