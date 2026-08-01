export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  sourceOfAuthority: scene(0, 120),
  partyIdentity: scene(120, 120),
  judgmentTarget: scene(240, 120),
  deathConsequences: scene(360, 120),
} as const;

export const DURATION_FRAMES = 480;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
