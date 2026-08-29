import { DisclosureDarkroomStudio } from "@/animations/administrative-law/21/disclosure-darkroom-studio/remotion/DisclosureDarkroomStudio";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/21/disclosure-darkroom-studio/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "party-and-defendant-trays", number: "01", title: "诉讼当事人", ...SCENES["party-and-defendant-trays"] },
  { id: "acceptance-screening-bath", number: "02", title: "受理筛选", ...SCENES["acceptance-screening-bath"] },
  { id: "burden-developing-pan", number: "03", title: "举证责任", ...SCENES["burden-developing-pan"] },
  { id: "verdict-four-troughs", number: "04", title: "判决四槽", ...SCENES["verdict-four-troughs"] },
];

export const DisclosureDarkroomStudioPlayer = () => (
  <RemotionDeck
    animationId="disclosure-darkroom-studio"
    title="政府信息公开行政案件知识点总结"
    component={DisclosureDarkroomStudio}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default DisclosureDarkroomStudioPlayer;
