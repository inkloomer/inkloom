import {LegalValidity} from '@/animations/theoretical-law/01/legal-validity/remotion/LegalValidity';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legal-validity/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'personal-reach', number: '01', title: '对人效力四主义', ...SCENES.personalReach},
  {id: 'spatial-reach', number: '02', title: '空间效力与调整实施', ...SCENES.spatialReach},
  {id: 'temporal-reach', number: '03', title: '生效失效与溯及力', ...SCENES.temporalReach},
];

export const LegalValidityPlayer = () => (
  <RemotionDeck
    animationId="legal-validity"
    component={LegalValidity}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律的效力：对人、空间与时间"
  />
);

export default LegalValidityPlayer;
