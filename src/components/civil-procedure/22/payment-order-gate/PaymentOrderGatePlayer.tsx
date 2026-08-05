import {typography} from '@/animations/civil-procedure/22/payment-order-gate/animation.meta';
import {PaymentOrderGate} from '@/animations/civil-procedure/22/payment-order-gate/remotion/PaymentOrderGate';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/22/payment-order-gate/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'payment-order-entry',number:'01',title:'支付令必须同时通过的申请要件',...SCENES.paymentOrderEntry},
  {id:'jurisdiction-and-objection',number:'02',title:'基层专属入口与 15 日书面异议',...SCENES.jurisdictionAndObjection},
  {id:'order-effects-and-lawsuits',number:'03',title:'异议、起诉与担保人的效力分流',...SCENES.orderEffectsAndLawsuits},
];
export default ()=> <RemotionDeck animationId="payment-order-gate" component={PaymentOrderGate} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="支付令申请与异议闸门" typography={typography} typographyScope={{animationId:'payment-order-gate',subject:'civil-procedure',topic:'22'}}/>;
