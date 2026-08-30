export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  principles: scene(0, 276),
  hostsVoters: scene(276, 288),
  candidates: scene(564, 288),
  votingResult: scene(852, 276),
  reviewRecall: scene(1128, 288),
} as const;

export const DURATION_FRAMES = 1416;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
