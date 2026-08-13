export const FPS=60;
export const SCENES={
  'six-principles-overview':{start:0,duration:360,previewEndTrimFrames:12},
  'legality-boundary':{start:360,duration:330,previewEndTrimFrames:12},
  'reasonableness-scale':{start:690,duration:420,previewEndTrimFrames:12},
  'due-process-timeline':{start:1110,duration:420,previewEndTrimFrames:12},
  'good-faith-vault':{start:1530,duration:390,previewEndTrimFrames:12},
  'efficiency-responsibility':{start:1920,duration:360,previewEndTrimFrames:12},
  'exam-triage':{start:2280,duration:420,previewEndTrimFrames:12},
} as const;
export const DURATION_FRAMES=2700;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const PREVIEW_EXIT_TRIM_FRAMES=12;
