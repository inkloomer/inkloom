import {LegalReasoning} from '@/animations/theoretical-law/01/legal-reasoning/remotion/LegalReasoning';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legal-reasoning/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept-features', number: '01', title: '法律推理的概念与特点', ...SCENES.conceptFeatures},
  {id: 'syllogism-deduction', number: '02', title: '演绎推理：司法三段论', ...SCENES.syllogismDeduction},
  {id: 'inductive-analogy', number: '03', title: '归纳推理与类比推理', ...SCENES.inductiveAnalogy},
  {id: 'abductive-reverse-a-fortiori', number: '04', title: '设证 · 反向 · 当然推理', ...SCENES.abductiveReverseAFortiori},
  {id: 'verdict-map', number: '05', title: '不同推理的判断标志', ...SCENES.verdictMap},
];

export const LegalReasoningPlayer = () => (
  <RemotionDeck
    animationId="legal-reasoning"
    component={LegalReasoning}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律推理：演绎、或然与判断标志"
  />
);

export default LegalReasoningPlayer;
