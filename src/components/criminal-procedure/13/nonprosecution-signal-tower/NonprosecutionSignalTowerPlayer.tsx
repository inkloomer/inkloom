import {
  NonprosecutionSignalTower,
} from '@/animations/criminal-procedure/13/nonprosecution-signal-tower/remotion/NonprosecutionSignalTower';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/13/nonprosecution-signal-tower/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'three-kinds-arms',
    number: '01',
    title: '三面信号臂',
    ...SCENES['three-kinds-arms'],
  },
  {
    id: 'procedure-gates',
    number: '02',
    title: '程序六道闸',
    ...SCENES['procedure-gates'],
  },
  {
    id: 'relief-fork-tower',
    number: '03',
    title: '救济四向',
    ...SCENES['relief-fork-tower'],
  },
];

export const NonprosecutionSignalTowerPlayer = () => (
  <RemotionDeck
    animationId="nonprosecution-signal-tower"
    title="不起诉：三面信号臂、程序六道闸与救济四向"
    component={NonprosecutionSignalTower}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default NonprosecutionSignalTowerPlayer;
