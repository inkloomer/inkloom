import {
  JuvenileObservatoryGreenhouse,
} from '@/animations/criminal-procedure/20/juvenile-observatory-greenhouse/remotion/JuvenileObservatoryGreenhouse';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/20/juvenile-observatory-greenhouse/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'entry-conditions-panes',
    number: '01',
    title: '入室条件',
    ...SCENES['entry-conditions-panes'],
  },
  {
    id: 'objection-tunnel-split',
    number: '02',
    title: '异议分流与考验',
    ...SCENES['objection-tunnel-split'],
  },
  {
    id: 'exit-doors-verdict',
    number: '03',
    title: '出室两扇门',
    ...SCENES['exit-doors-verdict'],
  },
];

export const JuvenileObservatoryGreenhousePlayer = () => (
  <RemotionDeck
    animationId="juvenile-observatory-greenhouse"
    title="附条件不起诉：入室条件、异议分流与出室两扇门"
    component={JuvenileObservatoryGreenhouse}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default JuvenileObservatoryGreenhousePlayer;
