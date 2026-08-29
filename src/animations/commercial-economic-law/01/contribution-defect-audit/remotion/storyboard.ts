export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  defectiveTitle: scene(0, 300),
  formsCheckup: scene(300, 300),
  transferDuality: scene(600, 320),
} as const;

export const DURATION_FRAMES = 920;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
