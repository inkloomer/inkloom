export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  periodTypes: scene(0, 165),
  countingLine: scene(165, 195),
  holidayAndMail: scene(360, 180),
  extensionRequest: scene(540, 165),
} as const;

export const DURATION_FRAMES = 705;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
