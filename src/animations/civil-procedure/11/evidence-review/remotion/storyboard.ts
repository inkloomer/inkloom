export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  crossExaminationGate: scene(0, 195),
  illegalEvidenceSieve: scene(195, 195),
  capacityAndWeight: scene(390, 210),
  corroborationRing: scene(600, 225),
} as const;

export const DURATION_FRAMES = 825;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
