export const FPS = 30;
export const DURATION_FRAMES = 450;
const previewScene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 14});

export const SCENES = {
  concept: previewScene(0, 100),
  litigation: previewScene(100, 120),
  nonLitigation: previewScene(220, 120),
  comparison: previewScene(340, 110),
};

export const PALETTE = {
  background: '#F5F5F0',
  paper: '#FFFFFF',
  ink: '#1A1A1A',
  red: '#C83F35',
  teal: '#2A9D8F',
  blue: '#264653',
  gold: '#E9C46A',
  gray: '#8D99AE',
};

export const toSourceFrame = (frame: number) => frame;
