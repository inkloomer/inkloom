import {OfficialIntermediary} from '@/animations/criminal/23/official-intermediary/remotion/OfficialIntermediary';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/criminal/23/official-intermediary/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[{id:'identity-gate',number:'01',title:'国家工作人员身份闸门',...SCENES.identity},{id:'split-funds',number:'02',title:'100 万资金分流',...SCENES.split},{id:'disclosed-intent',number:'03',title:'明知与合意',...SCENES.intent},{id:'concealed-intent',number:'04',title:'隐瞒与独立既遂',...SCENES.conceal}];
export default function OfficialIntermediaryPlayer(){return <RemotionDeck animationId="official-intermediary" component={OfficialIntermediary} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="斡旋受贿三种共犯模型"/>}
