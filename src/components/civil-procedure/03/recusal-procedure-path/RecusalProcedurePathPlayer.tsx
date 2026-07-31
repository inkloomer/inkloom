import {RecusalProcedurePath} from '@/animations/civil-procedure/03/recusal-procedure-path/remotion/RecusalProcedurePath';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/03/recusal-procedure-path/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'scope', number: '01', title: '中立期待分叉', ...SCENES.scope},
  {id: 'timing', number: '02', title: '申请时间窗口', ...SCENES.timing},
  {id: 'pending-effect', number: '03', title: '审查期暂停', ...SCENES.pendingEffect},
  {id: 'decision', number: '04', title: '决定主体映射', ...SCENES.decision},
  {id: 'remedy', number: '05', title: '救济：复议一次', ...SCENES.remedy},
  {id: 'pause-vs-continue', number: '06', title: '审查停≠复议不停', ...SCENES.pauseVsContinue},
];

export const RecusalProcedurePathPlayer = () => (
  <RemotionDeck
    animationId="recusal-procedure-path"
    title="回避制度判断路径"
    component={RecusalProcedurePath}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default RecusalProcedurePathPlayer;
