export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  harmFactLadder: scene(0, 240),
  aggravatedStructure: scene(240, 250),
  causationSourceDial: scene(490, 250),
} as const;

export const DURATION_FRAMES = 740;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
