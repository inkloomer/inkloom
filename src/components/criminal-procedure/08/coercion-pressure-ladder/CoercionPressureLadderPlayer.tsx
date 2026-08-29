import {
  CoercionPressureLadder,
} from '@/animations/criminal-procedure/08/coercion-pressure-ladder/remotion/CoercionPressureLadder';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/08/coercion-pressure-ladder/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'pressure-ladder-overview',
    number: '01',
    title: '压力梯谱系',
    ...SCENES['pressure-ladder-overview'],
  },
  {
    id: 'bail-valve-panel',
    number: '02',
    title: '取保阀门盘',
    ...SCENES['bail-valve-panel'],
  },
  {
    id: 'arrest-gauge-board',
    number: '03',
    title: '逮捕三重仪表',
    ...SCENES['arrest-gauge-board'],
  },
];

export const CoercionPressureLadderPlayer = () => (
  <RemotionDeck
    animationId="coercion-pressure-ladder"
    title="强制措施：压力梯谱系、取保阀门盘与逮捕三重仪表"
    component={CoercionPressureLadder}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default CoercionPressureLadderPlayer;
