export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  ethicsPenalties: scene(0, 240),
  civilCriminal: scene(240, 228),
} as const;

export const DURATION_FRAMES = 468;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
