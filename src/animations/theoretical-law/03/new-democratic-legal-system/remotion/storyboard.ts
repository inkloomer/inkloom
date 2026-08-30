export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  constitutionalDocs: scene(0, 288),
  judicialSystem: scene(288, 264),
} as const;

export const DURATION_FRAMES = 552;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
