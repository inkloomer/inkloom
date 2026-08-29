import {LegalRelations} from '@/animations/theoretical-law/01/legal-relations/remotion/LegalRelations';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legal-relations/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept-features', number: '01', title: '法律关系的概念与特征', ...SCENES.conceptFeatures},
  {id: 'kind-pairs', number: '02', title: '法律关系的种类：四组分法', ...SCENES.kindPairs},
  {id: 'object-dishes', number: '03', title: '法律关系的客体', ...SCENES.objectDishes},
  {id: 'lifecycle-facts', number: '04', title: '产生、变更和消灭：法律事实', ...SCENES.lifecycleFacts},
];

export const LegalRelationsPlayer = () => (
  <RemotionDeck
    animationId="legal-relations"
    component={LegalRelations}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律关系：种类、资格、客体与变动"
  />
);

export default LegalRelationsPlayer;
