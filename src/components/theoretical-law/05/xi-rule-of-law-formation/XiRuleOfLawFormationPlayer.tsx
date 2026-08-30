import {XiRuleOfLawFormation} from '@/animations/theoretical-law/05/xi-rule-of-law-formation/remotion/XiRuleOfLawFormation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/05/xi-rule-of-law-formation/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'formation-logic', number: '01', title: '形成发展与三逻辑', ...SCENES.formationLogic},
  {id: 'features-significance', number: '02', title: '鲜明特色与重大意义', ...SCENES.featuresSignificance},
];

export const XiRuleOfLawFormationPlayer = () => (
  <RemotionDeck
    animationId="xi-rule-of-law-formation"
    component={XiRuleOfLawFormation}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="习近平法治思想的形成发展及重大意义"
  />
);

export default XiRuleOfLawFormationPlayer;
