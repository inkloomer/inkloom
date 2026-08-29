export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  simplifiedMerger: scene(0, 300),
  survivorVote: scene(300, 270),
  minorityNotice: scene(570, 280),
} as const;

export const DURATION_FRAMES = 850;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
