export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  officialFormality: scene(0, 264),
  classWill: scene(264, 300),
  materialDeterminism: scene(564, 300),
  depthLadderStatus: scene(864, 276),
} as const;

export const DURATION_FRAMES = 1140;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
