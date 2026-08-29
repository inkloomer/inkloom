import {
  DefensePilotHarbor,
} from '@/animations/criminal-procedure/06/defense-pilot-harbor/remotion/DefensePilotHarbor';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/06/defense-pilot-harbor/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'defense-kinds-lanes',
    number: '01',
    title: '三条泊道',
    ...SCENES['defense-kinds-lanes'],
  },
  {
    id: 'duty-lawyer-lighthouse',
    number: '02',
    title: '值班律师灯塔',
    ...SCENES['duty-lawyer-lighthouse'],
  },
  {
    id: 'aid-boundaries-scene',
    number: '03',
    title: '法援界碑',
    ...SCENES['aid-boundaries-scene'],
  },
];

export const DefensePilotHarborPlayer = () => (
  <RemotionDeck
    animationId="defense-pilot-harbor"
    title="辩护与代理：三条泊道、值班律师灯塔与法援界碑"
    component={DefensePilotHarbor}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DefensePilotHarborPlayer;
