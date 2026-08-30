export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  organHierarchyLattice: scene(0, 275),
  participantSortingDesk: scene(275, 295),
  unitDefendantLedger: scene(570, 285),
} as const;

export const DURATION_FRAMES = 855;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
