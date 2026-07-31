export const FPS = 60;
export const PLAYBACK_RATE = 0.6;
export const SOURCE_DURATION_SECONDS = 19;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const previewEndTrimFrames = toPlaybackFrames(14);
const scene = (start: number, duration: number) => ({start: toPlaybackFrames(start), duration: toPlaybackFrames(duration), previewEndTrimFrames});

export const DURATION_FRAMES = toPlaybackFrames(SOURCE_DURATION_SECONDS * FPS);
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

export const SCENES = {
  scope: scene(0, 180),
  fullPowerTrap: scene(180, 300),
  executionStage: scene(480, 300),
  divorceDuty: scene(780, 300),
} as const;

export const PALETTE = {
  background: '#E7EBEF',
  paper: '#F6F8FA',
  ink: '#26374A',
  muted: '#5D6B7C',
  line: '#BCC7D1',
  mint: '#2E8B7B',
  mintSoft: '#DCEEE9',
  red: '#C0392B',
  redSoft: '#F5DCD8',
  seal: '#D64541',
  white: '#FFFFFF',
} as const;

export type Accent = 'mint' | 'red' | 'seal';

export const accentColor = (accent: Accent) => PALETTE[accent];
export const accentSoftColor = (accent: Accent) => PALETTE[`${accent}Soft`];
