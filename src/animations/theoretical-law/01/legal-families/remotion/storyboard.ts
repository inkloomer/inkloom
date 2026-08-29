export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  familyGates: scene(0, 240),
  twinCrests: scene(240, 264),
  macroLanes: scene(504, 300),
  degreeFootnotes: scene(804, 240),
} as const;

export const DURATION_FRAMES = 1044;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
