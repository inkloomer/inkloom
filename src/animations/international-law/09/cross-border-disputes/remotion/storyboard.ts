export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 32;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const PREVIEW_EXIT_TRIM_FRAMES = toPlaybackFrames(0);
const slowScene = (start: number, duration: number) => ({
  start: toPlaybackFrames(start),
  duration: toPlaybackFrames(duration),
  previewEndTrimFrames: PREVIEW_EXIT_TRIM_FRAMES,
});

export const DURATION_FRAMES = toPlaybackFrames(SOURCE_DURATION_SECONDS * FPS);
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

export const SCENES = {
  arbitrationAgreement: slowScene(0, 420),
  jurisdictionLevels: slowScene(420, 270),
  territorialBasics: slowScene(690, 390),
  forumMechanics: slowScene(1080, 420),
  foreignStatus: slowScene(1500, 420),
} as const;

export const PALETTE = {
  mist: '#EEF4F3',
  card: '#F8FBFA',
  ink: '#173F4E',
  paperText: '#173F4E',
  muted: '#6C8794',
  line: '#C2D4D6',
  sea: '#1F6E8C',
  seaSoft: 'rgba(31,110,140,0.13)',
  coral: '#E2725B',
  coralSoft: 'rgba(226,114,91,0.15)',
  sand: '#C9A96B',
  sandSoft: 'rgba(201,169,107,0.16)',
} as const;
