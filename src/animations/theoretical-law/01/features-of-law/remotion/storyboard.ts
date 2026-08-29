export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  normativityScope: scene(0, 264),
  stateWillPaths: scene(264, 276),
  universalityEqual: scene(540, 240),
  rightsDutiesMatrix: scene(780, 264),
  coercionJusticiability: scene(1044, 288),
} as const;

export const DURATION_FRAMES = 1332;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
