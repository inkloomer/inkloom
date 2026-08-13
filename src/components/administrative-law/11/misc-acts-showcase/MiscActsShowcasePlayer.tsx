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
  {id: 'six-act-showcase', number: '01', title: '六种行为总览', ...SCENES['six-act-showcase']},
  {id: 'levy-vs-requisition', number: '02', title: '征收vs征用', ...SCENES['levy-vs-requisition']},
  {id: 'adjudication-vs-confirmation', number: '03', title: '裁决vs确认', ...SCENES['adjudication-vs-confirmation']},
  {id: 'grant-vs-award', number: '04', title: '给付vs奖励', ...SCENES['grant-vs-award']},
  {id: 'mnemonic-recap', number: '05', title: '记忆口诀', ...SCENES['mnemonic-recap']},
];

export const MiscActsShowcasePlayer = () => (
  <RemotionDeck
    animationId="misc-acts-showcase"
    title="其他具体行政行为"
    component={MiscActsShowcase}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default MiscActsShowcasePlayer;
