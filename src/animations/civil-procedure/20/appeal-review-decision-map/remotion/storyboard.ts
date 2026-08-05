export const FPS=30; const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:12});
export const SCENES={appealEntry:scene(0,270),partyPositionImpactTest:scene(270,240),requestScope:scene(510,255),newMattersRouting:scene(765,285),adjudicationSwitchboard:scene(1050,270),remandAndExitEffects:scene(1320,300)} as const;
export const DURATION_FRAMES=1620; export const DURATION_SECONDS=DURATION_FRAMES/FPS; export const toSourceFrame=(frame:number)=>frame;
