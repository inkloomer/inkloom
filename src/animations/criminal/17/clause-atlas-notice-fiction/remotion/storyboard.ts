export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  crimeNameThreeForms: scene(0, 250),
  crimeDescriptionFour: scene(250, 230),
  noticeFictionFork: scene(480, 260),
  fictionNineAtlas: scene(740, 260),
} as const;

export const DURATION_FRAMES = 1000;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
