export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  enforcementLaunchClock:scene(0,330),
  statutoryJurisdiction:scene(330,330),
  securityAndSettlement:scene(660,360),
  objectionsAndActions:scene(1020,390),
  specialEnforcementMeasures:scene(1410,390),
} as const;
export const DURATION_FRAMES=1800;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
