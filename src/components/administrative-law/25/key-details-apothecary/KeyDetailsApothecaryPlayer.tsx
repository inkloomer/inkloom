import { KeyDetailsApothecary } from "@/animations/administrative-law/25/key-details-apothecary/remotion/KeyDetailsApothecary";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/25/key-details-apothecary/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "fee-drawer-triad", number: "01", title: "收费三格", ...SCENES["fee-drawer-triad"] },
  { id: "oral-form-gate", number: "02", title: "口头与书面", ...SCENES["oral-form-gate"] },
  { id: "announcement-shelf", number: "03", title: "公告清单", ...SCENES["announcement-shelf"] },
  { id: "seal-drawer-quartet", number: "04", title: "印章四屉", ...SCENES["seal-drawer-quartet"] },
  { id: "signature-herb-ledger", number: "05", title: "签名十二签", ...SCENES["signature-herb-ledger"] },
  { id: "recording-headcount-lock", number: "06", title: "录音与人数", ...SCENES["recording-headcount-lock"] },
  { id: "exclusion-tier-stair", number: "07", title: "除外阶梯", ...SCENES["exclusion-tier-stair"] },
  { id: "number-scale-penalty", number: "08", title: "数字·处罚强制", ...SCENES["number-scale-penalty"] },
  { id: "number-scale-suit-review", number: "09", title: "数字·诉讼复议", ...SCENES["number-scale-suit-review"] },
  { id: "number-scale-remainder", number: "10", title: "数字·其余四格", ...SCENES["number-scale-remainder"] },
];

export const KeyDetailsApothecaryPlayer = () => (
  <RemotionDeck
    animationId="key-details-apothecary"
    title="行政法必考细节"
    component={KeyDetailsApothecary}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default KeyDetailsApothecaryPlayer;
