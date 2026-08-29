export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  closingLane: scene(0, 300),
  courtTrack: scene(300, 260),
  simpleDeregister: scene(560, 290),
} as const;

export const DURATION_FRAMES = 850;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
