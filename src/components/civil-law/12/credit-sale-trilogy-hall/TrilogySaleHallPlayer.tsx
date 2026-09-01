import {TrilogySaleHall} from '@/animations/civil-law/12/credit-sale-trilogy-hall/remotion/TrilogySaleHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/credit-sale-trilogy-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'trial-purchase-cycle',
    number: '01',
    title: '试用买卖的三岔出口',
    ...SCENES['trial-purchase-cycle'],
  },
  {
    id: 'installment-protection-fork',
    number: '02',
    title: '分期付款的双岔保护',
    ...SCENES['installment-protection-fork'],
  },
  {
    id: 'retention-retrieval-loop',
    number: '03',
    title: '保留所有权的取回闭环',
    ...SCENES['retention-retrieval-loop'],
  },
  {
    id: 'trilogy-comparison-ledger',
    number: '04',
    title: '保留所有权与分期付款对比',
    ...SCENES['trilogy-comparison-ledger'],
  },
];

export const TrilogySaleHallPlayer = () => (
  <RemotionDeck
    animationId="credit-sale-trilogy-hall"
    title="特种买卖之一——赭石三赊馆"
    component={TrilogySaleHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default TrilogySaleHallPlayer;
