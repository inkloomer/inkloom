import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ReclaimRight} from '@/animations/commercial-law/11/reclaim-right/remotion/ReclaimRight';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/11/reclaim-right/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'reclaim-right-scene-01', number: '01', title: '取回权的总规则', ...SCENES['reclaim-right-scene-01']},
  {id: 'reclaim-right-scene-02', number: '02', title: '违法转让与毁损灭失', ...SCENES['reclaim-right-scene-02']},
  {id: 'reclaim-right-scene-03', number: '03', title: '在途货物的取回', ...SCENES['reclaim-right-scene-03']},
];
export const ReclaimRightPlayer=()=> <RemotionDeck animationId="reclaim-right" title="破产取回权" component={ReclaimRight} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ReclaimRightPlayer;
