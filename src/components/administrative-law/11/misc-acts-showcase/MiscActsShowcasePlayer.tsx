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
  { id: 'power-prism-dispersion', number: '01', title: '六类行为速览', ...SCENES['power-prism-dispersion'] },
  { id: 'levy-requisition-kinetic-balance', number: '02', title: '征收征用对比', ...SCENES['levy-requisition-kinetic-balance'] },
  { id: 'adjudication-field-confirmation-scanner', number: '03', title: '裁决确认对比', ...SCENES['adjudication-field-confirmation-scanner'] },
  { id: 'welfare-hydraulics-merit-launcher', number: '04', title: '给付奖励对比', ...SCENES['welfare-hydraulics-merit-launcher'] },
  { id: 'exam-radar-steel-verdict', number: '05', title: '高频考点终审', ...SCENES['exam-radar-steel-verdict'] },
];

export const MiscActsShowcasePlayer = () => (
  <RemotionDeck
    animationId="misc-acts-showcase"
    title="其他具体行政行为全景"
    component={MiscActsShowcase}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default MiscActsShowcasePlayer;
