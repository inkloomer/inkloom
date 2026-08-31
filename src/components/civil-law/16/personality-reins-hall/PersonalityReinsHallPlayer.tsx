import {PersonalityReinsHall} from '@/animations/civil-law/16/personality-reins-hall/remotion/PersonalityReinsHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/16/personality-reins-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'portrait-license-lane',
    number: '01',
    title: '肖像使用许可合同',
    ...SCENES['portrait-license-lane'],
  },
  {
    id: 'body-donation-lane',
    number: '02',
    title: '器官捐献的自主决定',
    ...SCENES['body-donation-lane'],
  },
  {
    id: 'clinical-trial-gates',
    number: '03',
    title: '临床试验的四道闸',
    ...SCENES['clinical-trial-gates'],
  },
];

export const PersonalityReinsHallPlayer = () => (
  <RemotionDeck
    animationId="personality-reins-hall"
    title="人格支配——蜜蜡缰绳堂"
    component={PersonalityReinsHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PersonalityReinsHallPlayer;
