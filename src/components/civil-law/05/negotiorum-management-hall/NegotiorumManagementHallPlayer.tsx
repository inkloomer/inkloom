import {
  NegotiorumManagementHall,
} from '@/animations/civil-law/05/negotiorum-management-hall/remotion/NegotiorumManagementHall';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/05/negotiorum-management-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'concept-legal-element',
    number: '01',
    title: '概念与法律要件',
    ...SCENES['concept-legal-element'],
  },
  {
    id: 'subjective-objective-bench',
    number: '02',
    title: '主观与客观要件',
    ...SCENES['subjective-objective-bench'],
  },
  {
    id: 'special-three-scenes',
    number: '03',
    title: '三种特殊情况',
    ...SCENES['special-three-scenes'],
  },
  {
    id: 'effects-samaritan',
    number: '04',
    title: '效力与见义勇为',
    ...SCENES['effects-samaritan'],
  },
];

export const NegotiorumManagementHallPlayer = () => (
  <RemotionDeck
    animationId="negotiorum-management-hall"
    title="无因管理——无因管理堂"
    component={NegotiorumManagementHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default NegotiorumManagementHallPlayer;
