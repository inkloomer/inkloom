export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  twoStageEvaluation: scene(0, 250),
  ageGapCoPrincipals: scene(250, 270),
  capacityGapCoPrincipals: scene(520, 260),
  helperPrincipalPairs: scene(780, 260),
  instigatorThreeBranches: scene(1040, 270),
  dominionRealStandard: scene(1310, 260),
  minorAdultRoleCreed: scene(1570, 250),
  instigatorCapacityCase: scene(1820, 250),
} as const;

export const DURATION_FRAMES = 2070;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
