export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 57;

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
  autonomyClosest: slowScene(0, 330),
  subjectsAgency: slowScene(330, 450),
  marriage: slowScene(780, 450),
  familyProtection: slowScene(1230, 420),
  successionProperty: slowScene(1650, 450),
  contractTorts: slowScene(2100, 480),
  enrichmentIpNegotiable: slowScene(2580, 390),
  maritimeAviation: slowScene(2970, 450),
} as const;

export const PALETTE = {
  emerald: '#0F3D33',
  panel: '#16493E',
  cream: '#F5F1E3',
  ink: '#123830',
  paperText: '#F5F1E3',
  muted: '#8FA89D',
  line: '#2C5C50',
  persimmon: '#E07840',
  persimmonSoft: 'rgba(224,120,64,0.16)',
  jade: '#5FA98C',
  jadeSoft: 'rgba(95,169,140,0.16)',
  route: '#6B9BC3',
  routeSoft: 'rgba(107,155,195,0.16)',
  gold: '#C9A85C',
  goldSoft: 'rgba(201,168,92,0.16)',
} as const;
