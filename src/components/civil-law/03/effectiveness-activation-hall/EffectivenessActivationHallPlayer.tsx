import {
  EffectivenessActivationHall,
} from '@/animations/civil-law/03/effectiveness-activation-hall/remotion/EffectivenessActivationHall';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/03/effectiveness-activation-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'valid-effective-frame',
    number: '01',
    title: '有效与生效',
    ...SCENES['valid-effective-frame'],
  },
  {
    id: 'approval-contract-desk',
    number: '02',
    title: '依法需审批的合同',
    ...SCENES['approval-contract-desk'],
  },
  {
    id: 'condition-forks',
    number: '03',
    title: '附条件与拟制',
    ...SCENES['condition-forks'],
  },
  {
    id: 'term-gates',
    number: '04',
    title: '附期限与始期',
    ...SCENES['term-gates'],
  },
];

export const EffectivenessActivationHallPlayer = () => (
  <RemotionDeck
    animationId="effectiveness-activation-hall"
    title="民事法律行为的生效与附条件期限——生效刻度堂"
    component={EffectivenessActivationHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default EffectivenessActivationHallPlayer;
