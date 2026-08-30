export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  equalityPolitical: scene(0, 288),
  supervisionReligion: scene(288, 288),
  personalFreedom: scene(576, 264),
  socialEconomic: scene(840, 312),
} as const;

export const DURATION_FRAMES = 1152;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
