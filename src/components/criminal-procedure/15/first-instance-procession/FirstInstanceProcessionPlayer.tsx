import {
  FirstInstanceProcession,
} from '@/animations/criminal-procedure/15/first-instance-procession/remotion/FirstInstanceProcession';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/15/first-instance-procession/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'five-stage-street',
    number: '01',
    title: '五阶段流水街',
    ...SCENES['five-stage-street'],
  },
  {
    id: 'opening-rules-lane',
    number: '02',
    title: '开庭与调查铺规',
    ...SCENES['opening-rules-lane'],
  },
  {
    id: 'verdict-square',
    number: '03',
    title: '评议宣判广场',
    ...SCENES['verdict-square'],
  },
];

export const FirstInstanceProcessionPlayer = () => (
  <RemotionDeck
    animationId="first-instance-procession"
    title="法庭审判：五阶段流水街、开庭调查铺规与评议宣判广场"
    component={FirstInstanceProcession}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default FirstInstanceProcessionPlayer;
