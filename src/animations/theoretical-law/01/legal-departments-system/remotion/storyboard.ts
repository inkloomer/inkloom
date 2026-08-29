export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  departmentStandards: scene(0, 240),
  systemFeatures: scene(240, 252),
  sevenDepartments: scene(492, 264),
} as const;

export const DURATION_FRAMES = 756;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
