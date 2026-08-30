export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  roleTaxonomy: scene(0, 250),
  perpetratorVariants: scene(250, 270),
  jointMeaningPrinciple: scene(520, 260),
  childLookoutCase: scene(780, 250),
  coPrincipalRequirements: scene(1030, 250),
  jointLiabilityRule: scene(1280, 270),
  negligenceThreeTheories: scene(1550, 270),
  coPrincipalVariants: scene(1820, 270),
} as const;

export const DURATION_FRAMES = 2090;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
