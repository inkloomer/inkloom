export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  retrialScopeAndTriggers:scene(0,300),
  thirteenStatutoryGrounds:scene(300,390),
  sixMonthApplicationClock:scene(690,330),
  executionStateSwitch:scene(1020,300),
  threeMonthReviewGate:scene(1320,300),
  retrialHearingAndExits:scene(1620,360),
} as const;
export const DURATION_FRAMES=1980;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
