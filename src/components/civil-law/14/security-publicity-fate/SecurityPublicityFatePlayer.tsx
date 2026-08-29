import {
  SecurityPublicityFate,
} from '@/animations/civil-law/14/security-publicity-fate/remotion/SecurityPublicityFate';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/14/security-publicity-fate/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'creation-publicity-gate',
    number: '01',
    title: '设立四窗',
    ...SCENES['creation-publicity-gate'],
  },
  {
    id: 'limitation-fate-split',
    number: '02',
    title: '时效双轨',
    ...SCENES['limitation-fate-split'],
  },
  {
    id: 'priority-ladder-gate',
    number: '03',
    title: '竞存阶梯',
    ...SCENES['priority-ladder-gate'],
  },
];

export const SecurityPublicityFatePlayer = () => (
  <RemotionDeck
    animationId="security-publicity-fate"
    title="担保物权公示命运：设立四窗、时效双轨与竞存阶梯"
    component={SecurityPublicityFate}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default SecurityPublicityFatePlayer;
