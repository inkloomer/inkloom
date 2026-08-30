export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  originDerived: scene(0, 207),
  directIndirect: scene(207, 165),
  burdenEvidence: scene(372, 195),
  singleCaseTrap: scene(567, 165),
  proofThreshold: scene(732, 225),
  outOfScopeEvidence: scene(957, 225),
} as const;

export const DURATION_FRAMES = 1182;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
