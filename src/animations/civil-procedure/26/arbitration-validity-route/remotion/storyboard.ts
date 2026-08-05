export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  arbitrableScope:scene(0,300),
  agreementValidity:scene(300,360),
  choiceAndMultipleInstitutions:scene(660,300),
  timingAndAuthority:scene(960,360),
  relativityAndReview:scene(1320,360),
} as const;
export const DURATION_FRAMES=1680;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
