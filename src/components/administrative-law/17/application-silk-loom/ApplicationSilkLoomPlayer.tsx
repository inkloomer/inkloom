import { ApplicationSilkLoom } from "@/animations/administrative-law/17/application-silk-loom/remotion/ApplicationSilkLoom";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/17/application-silk-loom/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "five-thread-loom-wall", number: "01", title: "五档经纬", ...SCENES["five-thread-loom-wall"] },
  { id: "conflict-shuttle-lane", number: "02", title: "冲突解决", ...SCENES["conflict-shuttle-lane"] },
  { id: "referral-gate-unresolved", number: "03", title: "送请闸", ...SCENES["referral-gate-unresolved"] },
];

export const ApplicationSilkLoomPlayer = () => (
  <RemotionDeck
    animationId="application-silk-loom"
    title="法律适用制度"
    component={ApplicationSilkLoom}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default ApplicationSilkLoomPlayer;
