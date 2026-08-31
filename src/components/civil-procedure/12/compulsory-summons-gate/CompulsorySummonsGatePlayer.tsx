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
  { id: "summons-gate-decision", number: "01", title: "拘传三要件", ...SCENES["summons-gate-decision"] },
  { id: "fine-detention-desk", number: "02", title: "罚款和拘留", ...SCENES["fine-detention-desk"] },
  { id: "unit-measures-fork", number: "03", title: "对单位的措施", ...SCENES["unit-measures-fork"] },
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
