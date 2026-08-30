export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  freezeGate: scene(0, 220),
  investorGroup: scene(220, 220),
  workbench: scene(440, 220),
  equityGate: scene(660, 220),
} as const;

export const DURATION_FRAMES = 880;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
