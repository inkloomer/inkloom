export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  commutationGradeRuler: scene(0, 250),
  paroleGateQuads: scene(250, 260),
  paroleProbationCompare: scene(510, 260),
  limitationPeriodLadder: scene(770, 260),
  extensionInterruptionTrack: scene(1030, 260),
} as const;

export const DURATION_FRAMES = 1290;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
