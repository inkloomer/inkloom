import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {Wto} from '@/animations/international-law/18/wto/remotion/Wto';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/18/wto/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'wto-foundation', number: '01', title: 'WTO 基本制度', ...SCENES.wtoFoundation},
  {id: 'mfn-principle', number: '02', title: '最惠国待遇原则', ...SCENES.mfnPrinciple},
  {id: 'trims-ban', number: '03', title: 'TRIMs 禁止性投资措施', ...SCENES.trimsBan},
  {id: 'gats-modes', number: '04', title: 'GATS 服务贸易总协定', ...SCENES.gatsModes},
  {id: 'dispute-settlement', number: '05', title: 'WTO 争端解决机制', ...SCENES.disputeSettlement},
];

export const WtoPlayer = () => (
  <RemotionDeck
    animationId="wto"
    title="世界贸易组织"
    component={Wto}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default WtoPlayer;
