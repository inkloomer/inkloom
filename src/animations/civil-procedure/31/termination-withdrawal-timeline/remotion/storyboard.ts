export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  firstActionWithdrawal:scene(0,270),
  secondActionService:scene(270,270),
  noticeArrivalException:scene(540,270),
} as const;
export const DURATION_FRAMES=810;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
