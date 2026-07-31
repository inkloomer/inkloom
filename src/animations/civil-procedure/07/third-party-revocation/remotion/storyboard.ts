export const FPS = 60;
export const PLAYBACK_RATE = 0.6;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const previewEndTrimFrames = toPlaybackFrames(14);
const scene = (start: number, duration: number) => ({start: toPlaybackFrames(start), duration: toPlaybackFrames(duration), previewEndTrimFrames});

export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

export const SCENES = {
  concept: scene(0, 188),
  conditions: scene(188, 252),
  procedure: scene(440, 234),
  classification: scene(674, 246),
} as const;

export const SOURCE_DURATION_SECONDS = 920 / FPS;
export const DURATION_FRAMES = SCENES.classification.start + SCENES.classification.duration;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const PALETTE = {
  background: '#E2D9CB',
  sheet: '#F8F1E5',
  ink: '#17191D',
  muted: '#6C6860',
  line: '#B4A99A',
  cyan: '#008F99',
  cyanSoft: '#D7EEEA',
  vermilion: '#D74435',
  vermilionSoft: '#F4D8D0',
  yellow: '#E4B83F',
  yellowSoft: '#F8EBC0',
  violet: '#4E4C86',
  violetSoft: '#E1E1F2',
  blackSoft: '#303339',
} as const;

export type Accent = 'cyan' | 'vermilion' | 'yellow' | 'violet';

export const accentColor = (accent: Accent) => PALETTE[accent];
export const accentSoftColor = (accent: Accent) => PALETTE[`${accent}Soft`];
