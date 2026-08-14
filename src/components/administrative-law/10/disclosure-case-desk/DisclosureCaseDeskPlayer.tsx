import { DisclosureCaseDesk } from "@/animations/administrative-law/10/disclosure-case-desk/remotion/DisclosureCaseDesk";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/10/disclosure-case-desk/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "info-definition-scope", number: "01", title: "内涵判定", ...SCENES["info-definition-scope"] },
  { id: "disclosure-subject-matrix", number: "02", title: "主体权属", ...SCENES["disclosure-subject-matrix"] },
  { id: "nondisclosure-tier-matrix", number: "03", title: "三级梯队", ...SCENES["nondisclosure-tier-matrix"] },
  { id: "active-disclosure-scope-clock", number: "04", title: "主动公开", ...SCENES["active-disclosure-scope-clock"] },
  { id: "active-channels-venues", number: "05", title: "渠道场所", ...SCENES["active-channels-venues"] },
  { id: "application-intake-rules", number: "06", title: "准入与收到", ...SCENES["application-intake-rules"] },
  { id: "response-deadline-clock", number: "07", title: "答复时限", ...SCENES["response-deadline-clock"] },
  { id: "response-classification-matrix", number: "08", title: "答复分类", ...SCENES["response-classification-matrix"] },
  { id: "special-application-router", number: "09", title: "特殊处置", ...SCENES["special-application-router"] },
  { id: "exam-traps-verdict", number: "10", title: "真题避坑", ...SCENES["exam-traps-verdict"] },
];

export const DisclosureCaseDeskPlayer = () => (
  <RemotionDeck
    animationId="disclosure-case-desk"
    title="政府信息公开制度全景"
    component={DisclosureCaseDesk}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default DisclosureCaseDeskPlayer;
