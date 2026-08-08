export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  overview:scene(0,180),
  firstInstance:scene(180,240),
  secondInstance:scene(420,270),
  retrial:scene(690,300),
} as const;
export const DURATION_FRAMES=990;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
