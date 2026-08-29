import { ContractTwinMastHarbor } from "@/animations/administrative-law/22/contract-twin-mast-harbor/remotion/ContractTwinMastHarbor";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/22/contract-twin-mast-harbor/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "concept-kind-harbor", number: "01", title: "概念与种类", ...SCENES["concept-kind-harbor"] },
  { id: "dual-nature-masts", number: "02", title: "双性双桅", ...SCENES["dual-nature-masts"] },
  { id: "validity-tide-gauge", number: "03", title: "效力潮位", ...SCENES["validity-tide-gauge"] },
  { id: "jurisdiction-tide-chart", number: "04", title: "管辖海图", ...SCENES["jurisdiction-tide-chart"] },
  { id: "review-mast-split", number: "05", title: "双轨审查", ...SCENES["review-mast-split"] },
  { id: "verdict-dock-berths", number: "06", title: "判决泊位", ...SCENES["verdict-dock-berths"] },
];

export const ContractTwinMastHarborPlayer = () => (
  <RemotionDeck
    animationId="contract-twin-mast-harbor"
    title="行政协议及其诉讼制度"
    component={ContractTwinMastHarbor}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default ContractTwinMastHarborPlayer;
