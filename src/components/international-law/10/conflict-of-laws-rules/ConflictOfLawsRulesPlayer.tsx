import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {ConflictOfLawsRules} from '@/animations/international-law/10/conflict-of-laws-rules/remotion/ConflictOfLawsRules';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/10/conflict-of-laws-rules/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'concept-types', number: '01', title: '冲突规范与准据法', ...SCENES.conceptTypes},
  {id: 'characterization', number: '02', title: '定性（识别）', ...SCENES.characterization},
  {id: 'renvoi', number: '03', title: '反致三路线', ...SCENES.renvoi},
  {id: 'foreign-law-ascertainment', number: '04', title: '外国法的查明', ...SCENES.foreignLawAscertainment},
  {id: 'public-policy', number: '05', title: '公共秩序保留', ...SCENES.publicPolicy},
];

export const ConflictOfLawsRulesPlayer = () => (
  <RemotionDeck
    animationId="conflict-of-laws-rules"
    title="冲突规范"
    component={ConflictOfLawsRules}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ConflictOfLawsRulesPlayer;
