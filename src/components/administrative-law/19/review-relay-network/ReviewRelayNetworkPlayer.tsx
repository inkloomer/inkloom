import { ReviewRelayNetwork } from "@/animations/administrative-law/19/review-relay-network/remotion/ReviewRelayNetwork";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/19/review-relay-network/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "defendant-relay-station", number: "01", title: "被告驿站", ...SCENES["defendant-relay-station"] },
  { id: "jurisdiction-deadline-routes", number: "02", title: "管辖与起诉期", ...SCENES["jurisdiction-deadline-routes"] },
  { id: "trial-object-burden-ledger", number: "03", title: "对象与举证", ...SCENES["trial-object-burden-ledger"] },
  { id: "verdict-type-terminal", number: "04", title: "判决终点", ...SCENES["verdict-type-terminal"] },
];

export const ReviewRelayNetworkPlayer = () => (
  <RemotionDeck
    animationId="review-relay-network"
    title="经过复议的案件知识点总结"
    component={ReviewRelayNetwork}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default ReviewRelayNetworkPlayer;
