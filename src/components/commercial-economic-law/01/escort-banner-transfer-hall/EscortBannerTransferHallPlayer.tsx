import {EscortBannerTransferHall} from '@/animations/commercial-economic-law/01/escort-banner-transfer-hall/remotion/EscortBannerTransferHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/escort-banner-transfer-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'intent-slip', number: '01', title: '预订单不是镖单：预约可退', ...SCENES.intentSlip},
  {id: 'preemption-precondition', number: '02', title: '同路保票的前提：船真的开了', ...SCENES.preemptionPrecondition},
  {id: 'financial-aid', number: '03', title: '借镖两道闸：员工道宽，公司道严', ...SCENES.financialAid},
];

export const EscortBannerTransferHallPlayer = () => <RemotionDeck animationId="escort-banner-transfer-hall" component={EscortBannerTransferHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="股权转让：预订单、保票与借镖两闸" />;
export default EscortBannerTransferHallPlayer;
