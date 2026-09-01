import {SaleCounterHall} from '@/animations/civil-law/12/sale-counter-hall/remotion/SaleCounterHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/sale-counter-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'unauthorized-frame',
    number: '01',
    title: '买卖中的无权处分',
    ...SCENES['unauthorized-frame'],
  },
  {
    id: 'agency-coexist-fork',
    number: '02',
    title: '无权处分与无权代理的并存',
    ...SCENES['agency-coexist-fork'],
  },
  {
    id: 'multi-sale-lanes',
    number: '03',
    title: '动产多重买卖的履行顺序',
    ...SCENES['multi-sale-lanes'],
  },
];

export const SaleCounterHallPlayer = () => (
  <RemotionDeck
    animationId="sale-counter-hall"
    title="买卖合同之一——赤陶柜台馆"
    component={SaleCounterHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default SaleCounterHallPlayer;
