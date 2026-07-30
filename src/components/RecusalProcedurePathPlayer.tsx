import {RecusalProcedurePath} from '@/animations/civil-procedure/03/recusal-procedure-path/remotion/RecusalProcedurePath';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/03/recusal-procedure-path/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'scope', number: '01', title: '谁需要回避', ...SCENES.scope},
  {id: 'grounds', number: '02', title: '三组法定原因', ...SCENES.grounds},
  {id: 'application', number: '03', title: '申请方式与期限', ...SCENES.application},
  {id: 'pending-effect', number: '04', title: '申请与复议期间', ...SCENES.pendingEffect},
  {id: 'decision', number: '05', title: '回避决定主体', ...SCENES.decision},
  {id: 'remedy', number: '06', title: '救济与程序效力', ...SCENES.remedy},
];

export const RecusalProcedurePathPlayer = () => (
  <RemotionDeck
    title="回避制度判断路径"
    component={RecusalProcedurePath}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default RecusalProcedurePathPlayer;
