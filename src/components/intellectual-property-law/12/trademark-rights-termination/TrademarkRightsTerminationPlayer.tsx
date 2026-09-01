import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {TrademarkRightsTermination} from '@/animations/intellectual-property-law/12/trademark-rights-termination/remotion/TrademarkRightsTermination';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/12/trademark-rights-termination/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'trademark-rights-termination-scene-01', number: '01', title: '内容与续展', ...SCENES['trademark-rights-termination-scene-01']},
  {id: 'trademark-rights-termination-scene-02', number: '02', title: '撤销与无效', ...SCENES['trademark-rights-termination-scene-02']},
];
export const TrademarkRightsTerminationPlayer=()=> <RemotionDeck animationId="trademark-rights-termination" title="商标权的内容和消灭" component={TrademarkRightsTermination} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default TrademarkRightsTerminationPlayer;
