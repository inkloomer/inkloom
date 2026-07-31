import {BasicPrinciplesTriangle} from '@/animations/civil-procedure/03/basic-principles-triangle/remotion/BasicPrinciplesTriangle';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/03/basic-principles-triangle/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'relationships', number: '01', title: '基本原则关系图', ...SCENES.relationships},
];

export const BasicPrinciplesTrianglePlayer = () => (
  <RemotionDeck
    animationId="basic-principles-triangle"
    title="民诉基本原则关系图"
    component={BasicPrinciplesTriangle}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default BasicPrinciplesTrianglePlayer;
