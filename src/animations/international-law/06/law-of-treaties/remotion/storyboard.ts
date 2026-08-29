export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 35.5;

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
  conclusionElements: slowScene(0, 360),
  conclusionProcedure: slowScene(360, 420),
  registrationReservation: slowScene(780, 420),
  treatyEffect: slowScene(1200, 300),
  interpretation: slowScene(1500, 240),
  conflictAmendment: slowScene(1740, 390),
} as const;

export const PALETTE = {
  desk: '#E9EDF2',
  card: '#F7F9FB',
  ink: '#23405C',
  paperText: '#23405C',
  muted: '#6B7C8E',
  line: '#C4CFDA',
  steel: '#2E5E8C',
  steelSoft: 'rgba(46,94,140,0.13)',
  copper: '#A56B3C',
  copperSoft: 'rgba(165,107,60,0.15)',
  crimson: '#A93A46',
  crimsonSoft: 'rgba(169,58,70,0.13)',
} as const;
