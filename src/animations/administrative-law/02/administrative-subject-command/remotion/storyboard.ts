export const FPS=60;
export const SCENES={
  'subject-identity-radar':{start:0,duration:390,previewEndTrimFrames:12},
  'public-person-shell':{start:390,duration:330,previewEndTrimFrames:12},
  'twelve-agency-tree':{start:720,duration:420,previewEndTrimFrames:12},
  'dispatched-unit-switch':{start:1140,duration:390,previewEndTrimFrames:12},
  'authorization-delegation-tracks':{start:1530,duration:420,previewEndTrimFrames:12},
  'power-name-gates':{start:1950,duration:420,previewEndTrimFrames:12},
  'central-agency-hangars':{start:2370,duration:450,previewEndTrimFrames:12},
  'non-subject-quarantine':{start:2820,duration:390,previewEndTrimFrames:12},
  'staffing-command-network':{start:3210,duration:480,previewEndTrimFrames:12},
} as const;
export const DURATION_FRAMES=3690;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const PREVIEW_EXIT_TRIM_FRAMES=12;
