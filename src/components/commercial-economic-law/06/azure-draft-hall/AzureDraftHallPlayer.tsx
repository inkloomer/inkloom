import {AzureDraftHall} from '@/animations/commercial-economic-law/06/azure-draft-hall/remotion/AzureDraftHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/06/azure-draft-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'post-honour', number: '01', title: '拒付之后：期后背书变了味', ...SCENES.postHonour},
  {id: 'discount-counter', number: '02', title: '贴现被拒：票还是好票', ...SCENES.discountCounter},
  {id: 'forged-seal', number: '03', title: '伪造的章，有效的票', ...SCENES.forgedSeal},
];

export const AzureDraftHallPlayer = () => <RemotionDeck animationId="azure-draft-hall" component={AzureDraftHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="票据法：票据权利" />;
export default AzureDraftHallPlayer;
