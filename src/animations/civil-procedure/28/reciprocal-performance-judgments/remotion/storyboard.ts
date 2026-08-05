export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  defenseWithoutCounterclaim:scene(0,330),
  counterclaimChangesJudgment:scene(330,330),
  priorPerformanceDefense:scene(660,300),
} as const;
export const DURATION_FRAMES=960;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
