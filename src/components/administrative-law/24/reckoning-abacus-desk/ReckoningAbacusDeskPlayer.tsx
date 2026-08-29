import { ReckoningAbacusDesk } from "@/animations/administrative-law/24/reckoning-abacus-desk/remotion/ReckoningAbacusDesk";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/24/reckoning-abacus-desk/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "imputation-abacus-frame", number: "01", title: "归责三档", ...SCENES["imputation-abacus-frame"] },
  { id: "administrative-claim-desk", number: "02", title: "行政赔偿台", ...SCENES["administrative-claim-desk"] },
  { id: "judicial-compensation-gate", number: "03", title: "司法赔偿闸", ...SCENES["judicial-compensation-gate"] },
  { id: "indemnity-beads-ledger", number: "04", title: "算珠总账", ...SCENES["indemnity-beads-ledger"] },
];

export const ReckoningAbacusDeskPlayer = () => (
  <RemotionDeck
    animationId="reckoning-abacus-desk"
    title="国家赔偿"
    component={ReckoningAbacusDesk}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default ReckoningAbacusDeskPlayer;
