export const FPS=60;
export const SCENES={
 'legislation-print-line':{start:0,duration:360,previewEndTrimFrames:0},
 'project-intake-sieve':{start:360,duration:360,previewEndTrimFrames:0},
 'drafting-cross-table':{start:720,duration:450,previewEndTrimFrames:0},
 'review-dispute-mixer':{start:1170,duration:420,previewEndTrimFrames:0},
 'decision-publication-press':{start:1590,duration:420,previewEndTrimFrames:0},
 'interpretation-fork-plate':{start:2010,duration:360,previewEndTrimFrames:0},
 'maker-name-dual-plate':{start:2370,duration:390,previewEndTrimFrames:0},
 'decision-edition-filing-routes':{start:2760,duration:480,previewEndTrimFrames:0},
 'reporting-level-switch':{start:3240,duration:360,previewEndTrimFrames:0},
 'shall-semantics-balance':{start:3600,duration:390,previewEndTrimFrames:0},
} as const;
export const DURATION_FRAMES=3990;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const PREVIEW_EXIT_TRIM_FRAMES=0;
