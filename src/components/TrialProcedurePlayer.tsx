import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {TrialProcedure} from '@/animations/civil-procedure/01/trial-procedure/remotion/TrialProcedure';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/01/trial-procedure/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'criterion', number: '01', title: '分类标准：是否解决纠纷', ...SCENES.criterion},
  {id: 'litigation', number: '02', title: '诉讼程序', ...SCENES.litigation},
  {id: 'non-litigation', number: '03', title: '非讼程序', ...SCENES.nonLitigation},
  {id: 'voter-exception', number: '04', title: '选民资格例外', ...SCENES.voterException},
  {id: 'comparison', number: '05', title: '三类定位对照', ...SCENES.comparison},
];

export const TrialProcedurePlayer = () => (
  <RemotionDeck
    animationId="trial-procedure"
    title="民事审判程序分类"
    component={TrialProcedure}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default TrialProcedurePlayer;
