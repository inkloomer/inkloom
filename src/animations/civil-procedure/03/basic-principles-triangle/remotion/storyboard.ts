export const FPS = 30;
export const DURATION_FRAMES = 420;

export const SCENES = {
  relationships: {start: 0, duration: DURATION_FRAMES, previewEndTrimFrames: 0},
} as const;

export const PALETTE = {
  background: '#F3F5F2',
  paper: '#FFFFFF',
  ink: '#17201D',
  muted: '#66716C',
  line: '#CBD2CE',
  red: '#C83F35',
  redSoft: '#F7E5E2',
  teal: '#087C73',
  tealSoft: '#DFF0EC',
  gold: '#A8791D',
  goldSoft: '#F7EFD6',
  blue: '#3768A5',
  blueSoft: '#E4ECF7',
  purple: '#7C3AED',
  purpleSoft: '#EDE9FE',
} as const;

export type Accent = 'red' | 'teal' | 'gold' | 'blue' | 'purple';

export const accentColor = (accent: Accent) => PALETTE[accent];
export const accentSoftColor = (accent: Accent) => PALETTE[`${accent}Soft`];
