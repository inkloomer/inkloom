import {
  RetrialRewindLoom,
} from '@/animations/criminal-procedure/18/retrial-rewind-loom/remotion/RetrialRewindLoom';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/18/retrial-rewind-loom/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'launcher-shuttles',
    number: '01',
    title: '启动双梭',
    ...SCENES['launcher-shuttles'],
  },
  {
    id: 'procedure-weft',
    number: '02',
    title: '再审程序纬线',
    ...SCENES['procedure-weft'],
  },
  {
    id: 'result-shelf',
    number: '03',
    title: '处理结果架',
    ...SCENES['result-shelf'],
  },
];

export const RetrialRewindLoomPlayer = () => (
  <RemotionDeck
    animationId="retrial-rewind-loom"
    title="审判监督：启动双梭、程序纬线与处理结果架"
    component={RetrialRewindLoom}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default RetrialRewindLoomPlayer;
