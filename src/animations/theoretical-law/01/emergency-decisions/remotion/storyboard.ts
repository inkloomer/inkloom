export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  allocation: scene(0, 288),
  premier: scene(288, 264),
  meetingsOrgs: scene(552, 300),
} as const;

export const DURATION_FRAMES = 852;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
