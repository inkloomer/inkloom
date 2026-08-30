import {
  CapacityGuardianshipRegistry,
} from '@/animations/civil-law/02/capacity-guardianship-registry/remotion/CapacityGuardianshipRegistry';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/02/capacity-guardianship-registry/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'capacity-birth-death-gate',
    number: '01',
    title: '生死之门·胎儿三岔',
    ...SCENES['capacity-birth-death-gate'],
  },
  {
    id: 'capacity-three-tier-bench',
    number: '02',
    title: '行为能力三级台阶',
    ...SCENES['capacity-three-tier-bench'],
  },
  {
    id: 'guardianship-will-forks',
    number: '03',
    title: '确立上·当然遗嘱协商',
    ...SCENES['guardianship-will-forks'],
  },
  {
    id: 'guardianship-order-ladder',
    number: '04',
    title: '确立下·顺序指定机关',
    ...SCENES['guardianship-order-ladder'],
  },
  {
    id: 'guardianship-duty-verdicts',
    number: '05',
    title: '职责撤销恢复',
    ...SCENES['guardianship-duty-verdicts'],
  },
];

export const CapacityGuardianshipRegistryPlayer = () => (
  <RemotionDeck
    animationId="capacity-guardianship-registry"
    title="民事主体——权利能力、行为能力与监护的摇篮印信堂"
    component={CapacityGuardianshipRegistry}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default CapacityGuardianshipRegistryPlayer;
