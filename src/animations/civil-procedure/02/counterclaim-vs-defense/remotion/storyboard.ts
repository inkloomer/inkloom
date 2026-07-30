export const FPS = 60;
export const PLAYBACK_RATE = 0.6;
export const SOURCE_DURATION_SECONDS = 28;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const PREVIEW_EXIT_TRIM_FRAMES = toPlaybackFrames(14);
const slowScene = (start: number, duration: number) => ({
  start: toPlaybackFrames(start),
  duration: toPlaybackFrames(duration),
  previewEndTrimFrames: PREVIEW_EXIT_TRIM_FRAMES,
});

export const DURATION_FRAMES = toPlaybackFrames(SOURCE_DURATION_SECONDS * FPS);
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

export const SCENES = {
  concept: slowScene(0, 210),
  technique: slowScene(210, 270),
  cases: slowScene(480, 390),
  independence: slowScene(870, 270),
  recap: slowScene(1140, 540),
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
