export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {
  formulaAssembly: scene(0, 165),
  subjectGate: scene(165, 180),
  propertyDutyGates: scene(345, 210),
} as const;
export const DURATION_FRAMES = 555;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
