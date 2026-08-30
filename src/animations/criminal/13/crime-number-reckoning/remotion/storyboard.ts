export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  oneActThreeRelations: scene(0, 250),
  continueAggravateLane: scene(250, 260),
  combinedSerialYard: scene(510, 250),
  absorbPostActs: scene(760, 250),
  involvedPrincipleFloor: scene(1010, 260),
} as const;

export const DURATION_FRAMES = 1270;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
