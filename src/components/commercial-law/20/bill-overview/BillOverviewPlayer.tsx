import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BillOverview} from '@/animations/commercial-law/20/bill-overview/remotion/BillOverview';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/20/bill-overview/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'bill-overview-scene-01', number: '01', title: '三种票据', ...SCENES['bill-overview-scene-01']},
  {id: 'bill-overview-scene-02', number: '02', title: '票据关系', ...SCENES['bill-overview-scene-02']},
  {id: 'bill-overview-scene-03', number: '03', title: '六大特征', ...SCENES['bill-overview-scene-03']},
];
export const BillOverviewPlayer=()=> <RemotionDeck animationId="bill-overview" title="票据法概述" component={BillOverview} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BillOverviewPlayer;
