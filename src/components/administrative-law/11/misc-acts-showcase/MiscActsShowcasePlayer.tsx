import { MiscActsShowcase } from "@/animations/administrative-law/11/misc-acts-showcase/remotion/MiscActsShowcase";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/11/misc-acts-showcase/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  { id: 'power-prism-dispersion', number: '01', title: '权力光谱六向分流', ...SCENES['power-prism-dispersion'] },
  { id: 'levy-requisition-kinetic-balance', number: '02', title: '征收vs征用平衡台', ...SCENES['levy-requisition-kinetic-balance'] },
  { id: 'adjudication-field-confirmation-scanner', number: '03', title: '裁决力场vs确认透镜', ...SCENES['adjudication-field-confirmation-scanner'] },
  { id: 'welfare-hydraulics-merit-launcher', number: '04', title: '给付安全网vs奖励台', ...SCENES['welfare-hydraulics-merit-launcher'] },
  { id: 'exam-radar-steel-verdict', number: '05', title: '真题雷达与终审钢印', ...SCENES['exam-radar-steel-verdict'] },
];

export const MiscActsShowcasePlayer = () => (
  <RemotionDeck
    animationId="misc-acts-showcase"
    title="公法权力光谱分流仪"
    component={MiscActsShowcase}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default MiscActsShowcasePlayer;
