import {ObligationClassificationHall} from '@/animations/civil-law/10/obligation-classification-hall/remotion/ObligationClassificationHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/10/obligation-classification-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'basis-object-pairs',
    number: '01',
    title: '债的分类：依据与标的',
    ...SCENES['basis-object-pairs'],
  },
  {
    id: 'joint-share-fork',
    number: '02',
    title: '连带之债与按份之债',
    ...SCENES['joint-share-fork'],
  },
  {
    id: 'simple-choice-loom',
    number: '03',
    title: '简单之债与选择之债',
    ...SCENES['simple-choice-loom'],
  },
];

export const ObligationClassificationHallPlayer = () => (
  <RemotionDeck
    animationId="obligation-classification-hall"
    title="债的分类——黛绿织机馆"
    component={ObligationClassificationHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ObligationClassificationHallPlayer;
