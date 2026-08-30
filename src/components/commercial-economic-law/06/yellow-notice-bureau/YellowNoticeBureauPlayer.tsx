import {YellowNoticeBureau} from '@/animations/commercial-economic-law/06/yellow-notice-bureau/remotion/YellowNoticeBureau';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/06/yellow-notice-bureau/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'freeze-gate', number: '01', title: '公示催告：冻结但不作废', ...SCENES.freezeGate},
  {id: 'void-verdict', number: '02', title: '除权判决：一张废纸的诞生', ...SCENES.voidVerdict},
  {id: 'scrap-payment', number: '03', title: '废纸上的付款责任：找丁', ...SCENES.scrapPayment},
];

export const YellowNoticeBureauPlayer = () => <RemotionDeck animationId="yellow-notice-bureau" component={YellowNoticeBureau} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="票据法：失票救济" />;
export default YellowNoticeBureauPlayer;
