export const FPS=30; const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:12});
export const SCENES={publicInterestEntry:scene(0,270),coPlaintiffAndPrivateClaims:scene(270,255),settlementPublicReview:scene(525,240),procuratorateSupplementarity:scene(765,285)} as const;
export const DURATION_FRAMES=1050; export const DURATION_SECONDS=DURATION_FRAMES/FPS; export const toSourceFrame=(frame:number)=>frame;
