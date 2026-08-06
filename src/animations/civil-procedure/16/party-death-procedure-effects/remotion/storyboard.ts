export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 12});
export const SCENES = {
  preSuitDeath: scene(0, 285),
  duringSuitGeneral: scene(285, 345),
  duringSuitIdentity: scene(630, 315),
} as const;
export const DURATION_FRAMES = 945;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
