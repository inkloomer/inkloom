export const FPS = 60;
export const PLAYBACK_RATE = 0.6;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const previewEndTrimFrames = toPlaybackFrames(14);
const scene = (start: number, duration: number) => ({start: toPlaybackFrames(start), duration: toPlaybackFrames(duration), previewEndTrimFrames});

export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

export const SCENES = {
  definition: scene(0, 192),
  comparison: scene(192, 234),
  rights: scene(426, 270),
  distinction: scene(696, 234),
} as const;

export const SOURCE_DURATION_SECONDS = 930 / FPS;
export const DURATION_FRAMES = SCENES.distinction.start + SCENES.distinction.duration;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const PALETTE = {
  background: '#161B1A',
  panel: '#222927',
  bone: '#F4ECDD',
  ink: '#121615',
  muted: '#A8B4AD',
  grid: '#34423E',
  coral: '#F26A5B',
  coralSoft: '#4D2928',
  mint: '#8FE0BF',
  mintSoft: '#203C35',
  yellow: '#F0D35B',
  yellowSoft: '#484329',
  white: '#FFFFFF',
} as const;

export type Accent = 'coral' | 'mint' | 'yellow';

export const accentColor = (accent: Accent) => PALETTE[accent];
export const accentSoftColor = (accent: Accent) => PALETTE[`${accent}Soft`];
