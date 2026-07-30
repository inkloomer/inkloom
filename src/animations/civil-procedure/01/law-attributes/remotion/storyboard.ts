export const FPS = 30;
export const DURATION_FRAMES = 360;

export const SCENES = {
  overview: { start: 0, duration: 120 },
  detail: { start: 120, duration: 130 },
  summary: { start: 250, duration: 110 },
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
