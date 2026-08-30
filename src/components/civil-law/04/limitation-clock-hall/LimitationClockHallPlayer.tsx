import {
  LimitationClockHall,
} from '@/animations/civil-law/04/limitation-clock-hall/remotion/LimitationClockHall';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/04/limitation-clock-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'concept-scope-gate',
    number: '01',
    title: '概念与适用范围',
    ...SCENES['concept-scope-gate'],
  },
  {
    id: 'expiry-effect-desk',
    number: '02',
    title: '届满的法律后果',
    ...SCENES['expiry-effect-desk'],
  },
  {
    id: 'start-points-ladder',
    number: '03',
    title: '起算五规定',
    ...SCENES['start-points-ladder'],
  },
  {
    id: 'suspension-window',
    number: '04',
    title: '中止与最后六个月',
    ...SCENES['suspension-window'],
  },
  {
    id: 'interruption-ledger',
    number: '05',
    title: '中断三事由',
    ...SCENES['interruption-ledger'],
  },
];

export const LimitationClockHallPlayer = () => (
  <RemotionDeck
    animationId="limitation-clock-hall"
    title="诉讼时效——诉讼时效刻度馆"
    component={LimitationClockHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default LimitationClockHallPlayer;
