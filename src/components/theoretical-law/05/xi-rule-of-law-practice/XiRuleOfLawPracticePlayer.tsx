import {XiRuleOfLawPractice} from '@/animations/theoretical-law/05/xi-rule-of-law-practice/remotion/XiRuleOfLawPractice';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/05/xi-rule-of-law-practice/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'five-guarantees', number: '01', title: '充分发挥法治的保障作用', ...SCENES.fiveGuarantees},
  {id: 'relations', number: '02', title: '若干重大关系', ...SCENES.relations},
];

export const XiRuleOfLawPracticePlayer = () => (
  <RemotionDeck
    animationId="xi-rule-of-law-practice"
    component={XiRuleOfLawPractice}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="习近平法治思想的实践要求"
  />
);

export default XiRuleOfLawPracticePlayer;
