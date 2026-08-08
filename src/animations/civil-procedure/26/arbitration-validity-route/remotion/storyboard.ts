export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  arbitrableScope:scene(0,300),
  agreementValidity:scene(300,360),
  choiceAndMultipleInstitutions:scene(660,300),
  timingAndAuthority:scene(960,360),
  relativityAndReview:scene(1320,360),
  arbitrationProcedure:scene(1680,420),
  awardSetAside:scene(2100,360),
  enforcementReview:scene(2460,360),
  arbitrationReporting:scene(2820,360),
} as const;
export const DURATION_FRAMES=3180;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
