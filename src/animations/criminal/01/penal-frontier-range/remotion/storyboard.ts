export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  techniqueRange: scene(0, 240),
  analogyExamStrip: scene(240, 280),
  reasonsRelationshipBench: scene(520, 250),
  nullaPoenaGate: scene(770, 260),
  spaceJurisdictionMap: scene(1030, 240),
  timeEffectDial: scene(1270, 220),
} as const;

export const DURATION_FRAMES = 1490;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
