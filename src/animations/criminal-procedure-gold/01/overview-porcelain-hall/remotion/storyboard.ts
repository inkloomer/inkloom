export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  twinValueScreen: scene(0, 265),
  valueTriadCabinet: scene(265, 285),
  functionStructureStage: scene(550, 310),
} as const;

export const DURATION_FRAMES = 860;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
