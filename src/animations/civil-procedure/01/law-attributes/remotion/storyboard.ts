export const FPS = 30;
export const DURATION_FRAMES = 360;
const previewScene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 14});

export const SCENES = {
  overview: previewScene(0, 120),
  detail: previewScene(120, 130),
  summary: previewScene(250, 110),
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
