import {PersonalityShieldHall} from '@/animations/civil-law/17/personality-shield-hall/remotion/PersonalityShieldHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/17/personality-shield-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'vitality-rights-rack',
    number: '01',
    title: '生命、健康、身体与性骚扰侵权',
    ...SCENES['vitality-rights-rack'],
  },
  {
    id: 'name-portrait-gallery',
    number: '02',
    title: '姓名侵权与肖像侵权',
    ...SCENES['name-portrait-gallery'],
  },
  {
    id: 'reputation-privacy-bench',
    number: '03',
    title: '名誉、隐私、个人信息与执行手段',
    ...SCENES['reputation-privacy-bench'],
  },
];

export const PersonalityShieldHallPlayer = () => (
  <RemotionDeck
    animationId="personality-shield-hall"
    title="人格保护——松石盾厅"
    component={PersonalityShieldHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PersonalityShieldHallPlayer;
