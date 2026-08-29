import {
  ExecutionDispatchBoard,
} from '@/animations/criminal-procedure/19/execution-dispatch-board/remotion/ExecutionDispatchBoard';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/19/execution-dispatch-board/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'four-berth-dispatch',
    number: '01',
    title: '四类分流台',
    ...SCENES['four-berth-dispatch'],
  },
  {
    id: 'document-belt',
    number: '02',
    title: '十日文书传送带',
    ...SCENES['document-belt'],
  },
  {
    id: 'trap-board',
    number: '03',
    title: '易错警示板',
    ...SCENES['trap-board'],
  },
];

export const ExecutionDispatchBoardPlayer = () => (
  <RemotionDeck
    animationId="execution-dispatch-board"
    title="刑罚执行：四类分流台、十日文书传送带与易错警示板"
    component={ExecutionDispatchBoard}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ExecutionDispatchBoardPlayer;
