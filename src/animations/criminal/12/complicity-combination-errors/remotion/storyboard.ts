export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  statusCrimeRoles: scene(0, 250),
  statusCombinationTable: scene(250, 260),
  omissionCombination: scene(510, 250),
  excessConceptStandard: scene(760, 250),
  excessThreeRoles: scene(1010, 270),
  shortfallVsExcess: scene(1280, 250),
  mistakePrincipalInstigator: scene(1530, 260),
  mistakeInstigatorIndirect: scene(1790, 250),
  victimAmongOffenders: scene(2040, 260),
} as const;

export const DURATION_FRAMES = 2300;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
