import {
  DualTrackRelay,
} from '@/animations/criminal-procedure/25/dual-track-relay/remotion/DualTrackRelay';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/25/dual-track-relay/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'filing-leniency-desk',
    number: '01',
    title: '立案调查与从宽衔接',
    ...SCENES['filing-leniency-desk'],
  },
  {
    id: 'four-measures-panel',
    number: '02',
    title: '四项监察强制措施',
    ...SCENES['four-measures-panel'],
  },
  {
    id: 'detention-depth-gauge',
    number: '03',
    title: '留置：批准与期限',
    ...SCENES['detention-depth-gauge'],
  },
  {
    id: 'measure-execution-tracks',
    number: '04',
    title: '调查措施：执行双轨',
    ...SCENES['measure-execution-tracks'],
  },
];

export const DualTrackRelayPlayer = () => (
  <RemotionDeck
    animationId="dual-track-relay"
    title="监察法易考知识点：立案从宽衔接、四强制措施与调查措施执行双轨"
    component={DualTrackRelay}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DualTrackRelayPlayer;
