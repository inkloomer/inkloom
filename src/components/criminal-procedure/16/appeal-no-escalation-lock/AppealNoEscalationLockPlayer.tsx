import {
  AppealNoEscalationLock,
} from '@/animations/criminal-procedure/16/appeal-no-escalation-lock/remotion/AppealNoEscalationLock';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/16/appeal-no-escalation-lock/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'one-principle-gate',
    number: '01',
    title: '单行闸',
    ...SCENES['one-principle-gate'],
  },
  {
    id: 'escalation-lanes',
    number: '02',
    title: '三条加重通道',
    ...SCENES['escalation-lanes'],
  },
  {
    id: 'concrete-bans-grid',
    number: '03',
    title: '八个具体禁令',
    ...SCENES['concrete-bans-grid'],
  },
];

export const AppealNoEscalationLockPlayer = () => (
  <RemotionDeck
    animationId="appeal-no-escalation-lock"
    title="上诉不加刑：单行闸、三条加重通道与八条具体禁令"
    component={AppealNoEscalationLock}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default AppealNoEscalationLockPlayer;
