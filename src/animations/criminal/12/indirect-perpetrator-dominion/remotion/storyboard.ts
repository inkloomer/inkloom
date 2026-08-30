export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  dominionFormula: scene(0, 250),
  dominionThreeSources: scene(250, 250),
  coercionModes: scene(500, 260),
  deceptionModes: scene(760, 270),
  statutoryIdentityCase: scene(1030, 250),
  accessoryDependence: scene(1280, 260),
  formStageDependence: scene(1540, 260),
  formCaseQuiz: scene(1800, 270),
} as const;

export const DURATION_FRAMES = 2070;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
