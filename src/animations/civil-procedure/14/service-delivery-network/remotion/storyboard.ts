export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  directRecipients: scene(0, 180),
  refusalService: scene(180, 180),
  confirmedRoutes: scene(360, 210),
  publicNoticeBoundary: scene(570, 180),
} as const;

export const DURATION_FRAMES = 750;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
