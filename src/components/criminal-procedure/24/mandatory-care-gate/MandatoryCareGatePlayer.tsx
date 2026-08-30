import {
  MandatoryCareGate,
} from '@/animations/criminal-procedure/24/mandatory-care-gate/remotion/MandatoryCareGate';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/24/mandatory-care-gate/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'entry-conditions-organs',
    number: '01',
    title: '适用条件与主体',
    ...SCENES['entry-conditions-organs'],
  },
  {
    id: 'identity-launch-fork',
    number: '02',
    title: '一词定身份',
    ...SCENES['identity-launch-fork'],
  },
  {
    id: 'trial-rule-rows',
    number: '03',
    title: '审理规则',
    ...SCENES['trial-rule-rows'],
  },
  {
    id: 'outcome-relief-release',
    number: '04',
    title: '结果、救济与解除',
    ...SCENES['outcome-relief-release'],
  },
];

export const MandatoryCareGatePlayer = () => (
  <RemotionDeck
    animationId="mandatory-care-gate"
    title="强制医疗程序：公暴继定四条件、一词定身份与结果救济解除"
    component={MandatoryCareGate}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default MandatoryCareGatePlayer;
