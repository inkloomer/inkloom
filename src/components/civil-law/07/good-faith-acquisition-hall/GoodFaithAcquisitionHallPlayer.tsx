import {GoodFaithAcquisitionHall} from '@/animations/civil-law/07/good-faith-acquisition-hall/remotion/GoodFaithAcquisitionHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/07/good-faith-acquisition-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'original-vs-derivative',
    number: '01',
    title: '原始取得与继受取得',
    ...SCENES['original-vs-derivative'],
  },
  {
    id: 'conditions-appearance-disposal',
    number: '02',
    title: '善意取得的条件①②',
    ...SCENES['conditions-appearance-disposal'],
  },
  {
    id: 'conditions-good-faith-delivery',
    number: '03',
    title: '善意取得的条件③④',
    ...SCENES['conditions-good-faith-delivery'],
  },
  {
    id: 'lost-property-window',
    number: '04',
    title: '遗失物的善意取得',
    ...SCENES['lost-property-window'],
  },
  {
    id: 'consequences-remedies',
    number: '05',
    title: '善意取得的后果与救济',
    ...SCENES['consequences-remedies'],
  },
];

export const GoodFaithAcquisitionHallPlayer = () => (
  <RemotionDeck
    animationId="good-faith-acquisition-hall"
    title="善意取得——玄铁公平秤"
    component={GoodFaithAcquisitionHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default GoodFaithAcquisitionHallPlayer;
