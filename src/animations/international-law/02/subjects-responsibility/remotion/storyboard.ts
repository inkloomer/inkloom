export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 39.5;

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
  immunity: slowScene(0, 330),
  recognition: slowScene(330, 300),
  succession: slowScene(630, 330),
  organizations: slowScene(960, 240),
  unOrgans: slowScene(1200, 330),
  councilVote: slowScene(1530, 420),
  responsibility: slowScene(1950, 420),
} as const;

export const PALETTE = {
  midnight: '#1C2233',
  panel: '#242D44',
  porcelain: '#EEF1F6',
  ink: '#1C2233',
  paperText: '#E8ECF5',
  muted: '#8A94AD',
  line: '#3A4463',
  brass: '#C9A24B',
  brassSoft: 'rgba(201,162,75,0.16)',
  jade: '#3FA37C',
  jadeSoft: 'rgba(63,163,124,0.16)',
  vermilion: '#D4553F',
  vermSoft: 'rgba(212,85,63,0.16)',
} as const;
