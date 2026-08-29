export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  principlesProposal: scene(0, 276),
  deliberationVoting: scene(276, 288),
  reviewFiling: scene(564, 288),
  adjudication: scene(852, 252),
} as const;

export const DURATION_FRAMES = 1104;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
