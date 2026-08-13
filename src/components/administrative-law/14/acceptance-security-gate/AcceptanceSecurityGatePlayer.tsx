import { AcceptanceSecurityGate } from "@/animations/administrative-law/14/acceptance-security-gate/remotion/AcceptanceSecurityGate";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/14/acceptance-security-gate/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  {id: 'positive-list-lane', number: '01', title: '正面列举11类', ...SCENES['positive-list-lane']},
  {id: 'exclusion-barriers', number: '02', title: '反面排除5类', ...SCENES['exclusion-barriers']},
  {id: 'agreement-counter', number: '03', title: '行政协议', ...SCENES['agreement-counter']},
  {id: 'incidental-review-entry', number: '04', title: '附带审查入口', ...SCENES['incidental-review-entry']},
  {id: 'review-process-console', number: '05', title: '审查程序内容', ...SCENES['review-process-console']},
  {id: 'court-handling-console', number: '06', title: '法院处理结果', ...SCENES['court-handling-console']},
  {id: 'suggestion-filing-console', number: '07', title: '建议与备案', ...SCENES['suggestion-filing-console']},
  {id: 'gate-traps', number: '08', title: '最爱考十判断', ...SCENES['gate-traps']},
];

export const AcceptanceSecurityGatePlayer = () => (
  <RemotionDeck
    animationId="acceptance-security-gate"
    title="行政诉讼受案范围"
    component={AcceptanceSecurityGate}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default AcceptanceSecurityGatePlayer;
