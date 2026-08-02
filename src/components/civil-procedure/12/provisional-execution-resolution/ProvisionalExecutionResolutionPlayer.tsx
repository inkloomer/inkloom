import {ProvisionalExecutionResolution} from '@/animations/civil-procedure/12/provisional-execution-resolution/remotion/ProvisionalExecutionResolution';
import {typography} from '@/animations/civil-procedure/12/provisional-execution-resolution/animation.meta';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/12/provisional-execution-resolution/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'civil-and-labor-routes', number: '01', title: '民诉与劳动仲裁路径', ...SCENES.civilAndLaborRoutes},
  {id: 'winning-resolution', number: '02', title: '胜诉后的确认', ...SCENES.winningResolution},
  {id: 'losing-reversal', number: '03', title: '败诉后的执行回转', ...SCENES.losingReversal},
];
export default () => <RemotionDeck animationId="provisional-execution-resolution" component={ProvisionalExecutionResolution} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="先予执行终局处理" typography={typography} typographyScope={{animationId: 'provisional-execution-resolution', subject: 'civil-procedure', topic: '12'}} />;
