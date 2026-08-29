import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {InternationalSaleOfGoods} from '@/animations/international-law/14/international-sale-of-goods/remotion/InternationalSaleOfGoods';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/14/international-sale-of-goods/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'fob-cfr-cif', number: '01', title: 'FOB·CFR·CIF', ...SCENES.termsCarriers},
  {id: 'terms-correspondence', number: '02', title: '术语梯队', ...SCENES.termsLadder},
  {id: 'cisg-scope', number: '03', title: '公约适用范围', ...SCENES.cisgScope},
  {id: 'seller-buyer-duties', number: '04', title: '卖方与买方义务', ...SCENES.dutiesLedgers},
  {id: 'risk-transfer', number: '05', title: '风险转移', ...SCENES.riskTimeline},
];

export const InternationalSaleOfGoodsPlayer = () => (
  <RemotionDeck
    animationId="international-sale-of-goods"
    title="国际货物买卖法"
    component={InternationalSaleOfGoods}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default InternationalSaleOfGoodsPlayer;
