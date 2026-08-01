import {InfluenceIntermediary} from '@/animations/criminal/23/influence-intermediary/remotion/InfluenceIntermediary';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/criminal/23/influence-intermediary/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[{id:'private-influence-network',number:'01',title:'私人影响力来源',...SCENES.network},{id:'influence-funds-split',number:'02',title:'关系网络中的资金分流',...SCENES.split},{id:'influence-disclosed-intent',number:'03',title:'告知代收与共犯',...SCENES.intent},{id:'designated-funds-trap',number:'04',title:'指定款项的故意边界',...SCENES.trap}];
export default function InfluenceIntermediaryPlayer(){return <RemotionDeck animationId="influence-intermediary" component={InfluenceIntermediary} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="利用影响力受贿三种共犯模型"/>}
