import { EvidenceVitrineMuseum } from "@/animations/administrative-law/16/evidence-vitrine-museum/remotion/EvidenceVitrineMuseum";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/16/evidence-vitrine-museum/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "eight-evidence-vitrine-hall", number: "01", title: "证据种类展厅", ...SCENES["eight-evidence-vitrine-hall"] },
  { id: "digital-vs-analog-compare", number: "02", title: "电子vs视听", ...SCENES["digital-vs-analog-compare"] },
  { id: "burden-of-proof-ledger", number: "03", title: "举证责任", ...SCENES["burden-of-proof-ledger"] },
  { id: "deadline-and-supplement-vitrine", number: "04", title: "期限补充", ...SCENES["deadline-and-supplement-vitrine"] },
  { id: "evidence-collection-desk", number: "05", title: "取证责令", ...SCENES["evidence-collection-desk"] },
  { id: "cross-exam-and-verdict-hall", number: "06", title: "质证认证", ...SCENES["cross-exam-and-verdict-hall"] },
];

export const EvidenceVitrineMuseumPlayer = () => (
  <RemotionDeck
    animationId="evidence-vitrine-museum"
    title="证据制度"
    component={EvidenceVitrineMuseum}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default EvidenceVitrineMuseumPlayer;
