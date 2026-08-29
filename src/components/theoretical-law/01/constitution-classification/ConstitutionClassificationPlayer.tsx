import {ConstitutionClassification} from '@/animations/theoretical-law/01/constitution-classification/remotion/ConstitutionClassification';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/constitution-classification/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'written-unwritten', number: '01', title: '成文与不成文', ...SCENES.writtenUnwritten},
  {id: 'rigid-flexible', number: '02', title: '刚性与柔性', ...SCENES.rigidFlexible},
  {id: 'sovereign-forms', number: '03', title: '钦定民定协定', ...SCENES.sovereignForms},
];

export const ConstitutionClassificationPlayer = () => (
  <RemotionDeck
    animationId="constitution-classification"
    component={ConstitutionClassification}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="宪法的形式分类：三组六类"
  />
);

export default ConstitutionClassificationPlayer;
