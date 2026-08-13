import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {RecoveryRight} from '@/animations/commercial-law/11/recovery-right/remotion/RecoveryRight';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/11/recovery-right/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'recovery-right-scene-01', number: '01', title: '追回的三类对象', ...SCENES['recovery-right-scene-01']},
  {id: 'recovery-right-scene-02', number: '02', title: '董监高的非正常收入', ...SCENES['recovery-right-scene-02']},
  {id: 'recovery-right-scene-03', number: '03', title: '出资追回不受期限限制', ...SCENES['recovery-right-scene-03']},
];
export const RecoveryRightPlayer=()=> <RemotionDeck animationId="recovery-right" title="追回权" component={RecoveryRight} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default RecoveryRightPlayer;
