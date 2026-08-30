import {LawyerPeerRelations} from '@/animations/theoretical-law/04/lawyer-peer-relations/remotion/LawyerPeerRelations';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/lawyer-peer-relations/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'friendship', number: '01', title: '同行之间的朋友关系', ...SCENES.friendship},
  {id: 'unfair', number: '02', title: '典型不正当竞争', ...SCENES.unfair},
];

export const LawyerPeerRelationsPlayer = () => (
  <RemotionDeck
    animationId="lawyer-peer-relations"
    component={LawyerPeerRelations}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="同行关系"
  />
);

export default LawyerPeerRelationsPlayer;
