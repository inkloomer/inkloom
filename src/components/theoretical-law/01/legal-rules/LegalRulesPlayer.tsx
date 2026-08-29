import {LegalRules} from '@/animations/theoretical-law/01/legal-rules/remotion/LegalRules';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legal-rules/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'three-elements-flow', number: '01', title: '三要素：假定·模式·后果', ...SCENES.threeElementsFlow},
  {id: 'rule-vs-text-ledger', number: '02', title: '规则与条文：一账两栏', ...SCENES.ruleVsTextLedger},
  {id: 'classification-axes', number: '03', title: '三对分类轨道', ...SCENES.classificationAxes},
  {id: 'omission-mnemonic', number: '04', title: '省略与逻辑', ...SCENES.omissionMnemonic},
];

export const LegalRulesPlayer = () => (
  <RemotionDeck
    animationId="legal-rules"
    component={LegalRules}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律规则：三要素、条文关系与三对分类"
  />
);

export default LegalRulesPlayer;
