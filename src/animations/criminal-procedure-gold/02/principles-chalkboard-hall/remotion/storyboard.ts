export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  principlePillars: scene(0, 280),
  supervisionLeniencyBoard: scene(280, 300),
  statuteBarBorderNotes: scene(580, 300),
} as const;

export const DURATION_FRAMES = 880;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
