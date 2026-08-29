import { LighthouseWatchNetwork } from "@/animations/administrative-law/20/lighthouse-watch-network/remotion/LighthouseWatchNetwork";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/20/lighthouse-watch-network/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "proposer-and-civil-compare", number: "01", title: "提出主体对比", ...SCENES["proposer-and-civil-compare"] },
  { id: "three-step-beam-path", number: "02", title: "三步程序", ...SCENES["three-step-beam-path"] },
  { id: "mnemonic-light-signal", number: "03", title: "灯语口诀", ...SCENES["mnemonic-light-signal"] },
];

export const LighthouseWatchNetworkPlayer = () => (
  <RemotionDeck
    animationId="lighthouse-watch-network"
    title="行政公益诉讼"
    component={LighthouseWatchNetwork}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default LighthouseWatchNetworkPlayer;
