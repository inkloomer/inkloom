import {
  ProcedureStructureOrrery,
} from '@/animations/criminal-procedure/01/procedure-structure-orrery/remotion/ProcedureStructureOrrery';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/01/procedure-structure-orrery/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'purpose-chain-gears',
    number: '01',
    title: '因果齿轮',
    ...SCENES['purpose-chain-gears'],
  },
  {
    id: 'four-construction-quadrants',
    number: '02',
    title: '四大轨道',
    ...SCENES['four-construction-quadrants'],
  },
  {
    id: 'separation-two-step-gate',
    number: '03',
    title: '控审分离',
    ...SCENES['separation-two-step-gate'],
  },
];

export const ProcedureStructureOrreryPlayer = () => (
  <RemotionDeck
    animationId="procedure-structure-orrery"
    title="刑事诉讼构造：因果齿轮、四大轨道与控审分离两步判"
    component={ProcedureStructureOrrery}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ProcedureStructureOrreryPlayer;
