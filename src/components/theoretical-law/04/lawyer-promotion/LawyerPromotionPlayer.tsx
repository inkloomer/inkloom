import {LawyerPromotion} from '@/animations/theoretical-law/04/lawyer-promotion/remotion/LawyerPromotion';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/lawyer-promotion/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'principles', number: '01', title: '律师执业推广的原则', ...SCENES.principles},
  {id: 'ad-publicity', number: '02', title: '律师广告与宣传规范', ...SCENES.adPublicity},
];

export const LawyerPromotionPlayer = () => (
  <RemotionDeck
    animationId="lawyer-promotion"
    component={LawyerPromotion}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="律师执业推广规范"
  />
);

export default LawyerPromotionPlayer;
