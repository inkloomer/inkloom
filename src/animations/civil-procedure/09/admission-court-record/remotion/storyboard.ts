export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  admissionOccasions: scene(0, 135),
  admissionEffect: scene(135, 150),
  admissionVeto: scene(285, 165),
  conditionalAdmission: scene(450, 195),
  withdrawalCompromise: scene(645, 195),
} as const;

export const DURATION_FRAMES = 840;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
