import { JudgmentExecutionClockwork } from "@/animations/administrative-law/18/judgment-execution-clockwork/remotion/JudgmentExecutionClockwork";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/18/judgment-execution-clockwork/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: "first-instance-gear-trio", number: "01", title: "一审三大齿轮", ...SCENES["first-instance-gear-trio"] },
  { id: "revocation-special-gear-train", number: "02", title: "撤销轮组", ...SCENES["revocation-special-gear-train"] },
  { id: "review-verdict-matrix-board", number: "03", title: "复议后判决矩阵", ...SCENES["review-verdict-matrix-board"] },
  { id: "second-instance-verdict-dial", number: "04", title: "二审表盘", ...SCENES["second-instance-verdict-dial"] },
  { id: "announcement-publicity-panel", number: "05", title: "宣判与公开", ...SCENES["announcement-publicity-panel"] },
  { id: "execution-mechanism-board", number: "06", title: "执行机械板", ...SCENES["execution-mechanism-board"] },
];

export const JudgmentExecutionClockworkPlayer = () => (
  <RemotionDeck
    animationId="judgment-execution-clockwork"
    title="诉讼判决和执行"
    component={JudgmentExecutionClockwork}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default JudgmentExecutionClockworkPlayer;
