export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  directIndirect: scene(0, 165),
  burdenEvidence: scene(165, 195),
  singleCaseTrap: scene(360, 165),
  proofThreshold: scene(525, 225),
  outOfScopeEvidence: scene(750, 225),
} as const;

export const DURATION_FRAMES = 975;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
