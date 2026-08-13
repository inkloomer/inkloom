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
  {id: 'case-mainline', number: '01', title: '案件主线', ...SCENES['case-mainline']},
  {id: 'plaintiff-gate', number: '02', title: '原告资格', ...SCENES['plaintiff-gate']},
  {id: 'defendant-routing', number: '03', title: '被告确定', ...SCENES['defendant-routing']},
  {id: 'admission-tray', number: '04', title: '应受理清单', ...SCENES['admission-tray']},
  {id: 'rejection-gate', number: '05', title: '不应受理清单', ...SCENES['rejection-gate']},
  {id: 'trial-desk', number: '06', title: '审理规则', ...SCENES['trial-desk']},
  {id: 'defendant-proof-scale', number: '07', title: '被告举证', ...SCENES['defendant-proof-scale']},
  {id: 'plaintiff-proof-scale', number: '08', title: '原告举证', ...SCENES['plaintiff-proof-scale']},
  {id: 'judgment-seals', number: '09', title: '判决四类', ...SCENES['judgment-seals']},
  {id: 'trap-quiz', number: '10', title: '最爱考判断', ...SCENES['trap-quiz']},
  {id: 'privacy-case', number: '11', title: '多问案例', ...SCENES['privacy-case']},
];

export const DisclosureCaseDeskPlayer = () => (
  <RemotionDeck
    animationId="disclosure-case-desk"
    title="政府信息公开案件诉讼流程"
    component={DisclosureCaseDesk}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default DisclosureCaseDeskPlayer;
