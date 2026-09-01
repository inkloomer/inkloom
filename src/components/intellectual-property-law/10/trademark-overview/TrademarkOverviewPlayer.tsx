import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {TrademarkOverview} from '@/animations/intellectual-property-law/10/trademark-overview/remotion/TrademarkOverview';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/10/trademark-overview/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'trademark-overview-scene-01', number: '01', title: '禁用与禁注', ...SCENES['trademark-overview-scene-01']},
  {id: 'trademark-overview-scene-02', number: '02', title: '分类与驰名', ...SCENES['trademark-overview-scene-02']},
];
export const TrademarkOverviewPlayer=()=> <RemotionDeck animationId="trademark-overview" title="商标法概述" component={TrademarkOverview} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default TrademarkOverviewPlayer;
