import { CompulsorySummonsGate } from "@/animations/civil-procedure/12/compulsory-summons-gate/remotion/CompulsorySummonsGate";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/civil-procedure/12/compulsory-summons-gate/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "summons-gate-decision", number: "01", title: "拘传判断门", ...SCENES["summons-gate-decision"] },
  { id: "measures-comparison-ledger", number: "02", title: "措施对比", ...SCENES["measures-comparison-ledger"] },
  { id: "fines-detention-scale", number: "03", title: "罚款拘留", ...SCENES["fines-detention-scale"] },
];

export const CompulsorySummonsGatePlayer = () => (
  <RemotionDeck
    animationId="compulsory-summons-gate"
    title="对妨碍诉讼的强制措施"
    component={CompulsorySummonsGate}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default CompulsorySummonsGatePlayer;
