export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  spyWireTrio: scene(0, 240),
  secretsDefineBench: scene(240, 240),
  secretsCrimesCompare: scene(480, 240),
} as const;

export const DURATION_FRAMES = 720;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
