export const FPS = 60;
export const PLAYBACK_RATE = 0.6;
export const SOURCE_DURATION_SECONDS = 14;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const previewEndTrimFrames = toPlaybackFrames(14);
const scene = (start: number, duration: number) => ({start: toPlaybackFrames(start), duration: toPlaybackFrames(duration), previewEndTrimFrames});

export const DURATION_FRAMES = toPlaybackFrames(SOURCE_DURATION_SECONDS * FPS);
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

export const SCENES = {
  definition: scene(0, 180),
  differences: scene(180, 300),
  deathEvent: scene(480, 300),
} as const;

export const PALETTE = {
  background: '#F4EDDF',
  panel: '#FCF7EC',
  ink: '#37332B',
  muted: '#83796A',
  line: '#D9CDB8',
  teal: '#1E7A6B',
  tealSoft: '#D8EBE4',
  amber: '#C98A2D',
  amberSoft: '#F6E8CE',
  red: '#C23B2E',
  redSoft: '#F6DCD7',
  white: '#FFFFFF',
} as const;

export type Accent = 'teal' | 'amber' | 'red';

export const accentColor = (accent: Accent) => PALETTE[accent];
export const accentSoftColor = (accent: Accent) => PALETTE[`${accent}Soft`];
