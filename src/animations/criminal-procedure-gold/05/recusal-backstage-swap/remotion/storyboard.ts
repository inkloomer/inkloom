export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  applicantGate: scene(0, 265),
  reasonReroom: scene(265, 285),
  decisionBaton: scene(550, 300),
} as const;

export const DURATION_FRAMES = 850;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
