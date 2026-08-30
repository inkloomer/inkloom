export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  guarantyFeatures: scene(0, 320),
  agencyNontransfer: scene(320, 320),
} as const;

export const DURATION_FRAMES = 640;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
