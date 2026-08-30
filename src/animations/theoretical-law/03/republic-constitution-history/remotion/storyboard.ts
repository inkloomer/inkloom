export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  linshiYuefa: scene(0, 264),
  tiantanYuanji: scene(264, 264),
  huixuan1947: scene(528, 288),
} as const;

export const DURATION_FRAMES = 816;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
