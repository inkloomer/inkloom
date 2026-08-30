export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  tenurePersonnel: scene(0, 276),
  specialAppointment: scene(276, 276),
  meetings: scene(552, 276),
  motionsRemoval: scene(828, 312),
} as const;

export const DURATION_FRAMES = 1140;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
