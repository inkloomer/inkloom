export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  twoClassificationMethods: scene(0, 260),
  ringleaderRelations: scene(260, 260),
  ringleaderPunishment: scene(520, 250),
  accessoryCoercedRoles: scene(770, 260),
} as const;

export const DURATION_FRAMES = 1030;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
