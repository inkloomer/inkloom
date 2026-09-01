import {MiscSaleHall} from '@/animations/civil-law/12/special-sale-misc-hall/remotion/MiscSaleHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/special-sale-misc-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'sample-quality-clause',
    number: '01',
    title: '样品与文字说明之争',
    ...SCENES['sample-quality-clause'],
  },
  {
    id: 'housing-permit-gate',
    number: '02',
    title: '商品房的许可与备案',
    ...SCENES['housing-permit-gate'],
  },
  {
    id: 'power-supply-duties',
    number: '03',
    title: '供用电的责任与自助',
    ...SCENES['power-supply-duties'],
  },
];

export const MiscSaleHallPlayer = () => (
  <RemotionDeck
    animationId="special-sale-misc-hall"
    title="特种买卖之二——青瓷杂肆馆"
    component={MiscSaleHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default MiscSaleHallPlayer;
