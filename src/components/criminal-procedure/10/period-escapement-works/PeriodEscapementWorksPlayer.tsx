import {
  PeriodEscapementWorks,
} from '@/animations/criminal-procedure/10/period-escapement-works/remotion/PeriodEscapementWorks';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/10/period-escapement-works/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'counting-units-gears',
    number: '01',
    title: '计算齿轮',
    ...SCENES['counting-units-gears'],
  },
  {
    id: 'recalc-special-cases',
    number: '02',
    title: '重算与特殊',
    ...SCENES['recalc-special-cases'],
  },
  {
    id: 'service-modes-board',
    number: '03',
    title: '送达方式板',
    ...SCENES['service-modes-board'],
  },
];

export const PeriodEscapementWorksPlayer = () => (
  <RemotionDeck
    animationId="period-escapement-works"
    title="期间与送达：计算齿轮、重算特殊情形与送达方式板"
    component={PeriodEscapementWorks}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PeriodEscapementWorksPlayer;
