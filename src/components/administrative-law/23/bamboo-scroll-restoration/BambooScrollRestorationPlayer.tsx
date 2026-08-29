import { BambooScrollRestoration } from "@/animations/administrative-law/23/bamboo-scroll-restoration/remotion/BambooScrollRestoration";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/23/bamboo-scroll-restoration/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "review-authority-bamboo-wall", number: "01", title: "复议机关竹墙", ...SCENES["review-authority-bamboo-wall"] },
  { id: "procedure-slips-lane", number: "02", title: "申请到决定简道", ...SCENES["procedure-slips-lane"] },
  { id: "summary-slips-drawer", number: "03", title: "简易程序抽屉", ...SCENES["summary-slips-drawer"] },
  { id: "special-slips-conservation", number: "04", title: "特别程序五筒", ...SCENES["special-slips-conservation"] },
  { id: "incidental-review-desk", number: "05", title: "附带审查案台", ...SCENES["incidental-review-desk"] },
];

export const BambooScrollRestorationPlayer = () => (
  <RemotionDeck
    animationId="bamboo-scroll-restoration"
    title="行政复议制度"
    component={BambooScrollRestoration}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default BambooScrollRestorationPlayer;
