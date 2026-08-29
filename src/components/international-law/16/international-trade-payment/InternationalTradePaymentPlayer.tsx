import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {InternationalTradePayment} from '@/animations/international-law/16/international-trade-payment/remotion/InternationalTradePayment';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/16/international-trade-payment/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'collection-desk', number: '01', title: '银行托收', ...SCENES.collectionDesk},
  {id: 'credit-letter-gate', number: '02', title: '银行信用证', ...SCENES.creditLetterGate},
  {id: 'fraud-stop-order', number: '03', title: '欺诈与止付令', ...SCENES.fraudStopOrder},
  {id: 'case-solving-order', number: '04', title: '综合案例破题', ...SCENES.caseSolvingOrder},
];

export const InternationalTradePaymentPlayer = () => (
  <RemotionDeck
    animationId="international-trade-payment"
    title="国际贸易支付法"
    component={InternationalTradePayment}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default InternationalTradePaymentPlayer;
