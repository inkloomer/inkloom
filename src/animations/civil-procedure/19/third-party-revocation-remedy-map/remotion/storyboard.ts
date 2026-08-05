export const FPS=30; const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:12});
export const SCENES={standingAndSixMonthClock:scene(0,270),nonacceptanceBoundaries:scene(270,255),partyPositionsAndExecution:scene(525,285),judgmentThreeWay:scene(810,240),retrialConvergence:scene(1050,285)} as const;
export const DURATION_FRAMES=1335; export const DURATION_SECONDS=DURATION_FRAMES/FPS; export const toSourceFrame=(frame:number)=>frame;
