export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  intakeConditionDesk: scene(0, 265),
  reliefThreeDoors: scene(265, 280),
  supervisionFourSteps: scene(545, 290),
} as const;

export const DURATION_FRAMES = 835;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
