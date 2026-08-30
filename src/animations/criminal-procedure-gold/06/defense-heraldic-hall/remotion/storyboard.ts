export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  dutyCounselLantern: scene(0, 285),
  defenderRosterWall: scene(285, 285),
  rightsDutiesDesk: scene(570, 300),
} as const;

export const DURATION_FRAMES = 870;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
