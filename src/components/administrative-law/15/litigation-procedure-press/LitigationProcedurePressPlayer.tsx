import { LitigationProcedurePress } from "@/animations/administrative-law/15/litigation-procedure-press/remotion/LitigationProcedurePress";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/15/litigation-procedure-press/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "suit-deadline-matrix", number: "01", title: "起诉期限", ...SCENES["suit-deadline-matrix"] },
  { id: "acceptance-verdict-compose", number: "02", title: "受理分拣", ...SCENES["acceptance-verdict-compose"] },
  { id: "remedy-type-drawer", number: "03", title: "救济字屉", ...SCENES["remedy-type-drawer"] },
  { id: "trial-ordinary-compose-lockup", number: "04", title: "普通程序", ...SCENES["trial-ordinary-compose-lockup"] },
  { id: "summary-procedure-quoin", number: "05", title: "简易程序", ...SCENES["summary-procedure-quoin"] },
  { id: "second-instance-keyline", number: "06", title: "二审校线", ...SCENES["second-instance-keyline"] },
  { id: "withdrawal-absence-sorting", number: "07", title: "撤诉缺席", ...SCENES["withdrawal-absence-sorting"] },
  { id: "advance-execution-dovetail", number: "08", title: "先予执行", ...SCENES["advance-execution-dovetail"] },
  { id: "mediation-rule-lock", number: "09", title: "调解程序", ...SCENES["mediation-rule-lock"] },
  { id: "court-appearance-and-cross-type", number: "10", title: "出庭与交叉", ...SCENES["court-appearance-and-cross-type"] },
];

export const LitigationProcedurePressPlayer = () => (
  <RemotionDeck
    animationId="litigation-procedure-press"
    title="行政诉讼程序"
    component={LitigationProcedurePress}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default LitigationProcedurePressPlayer;
