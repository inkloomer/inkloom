import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {DividendRight} from '@/animations/commercial-law/04/dividend-right/remotion/DividendRight';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/04/dividend-right/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'dividend-right-scene-01', number: '01', title: '分配依据与期限', ...SCENES['dividend-right-scene-01']},
  {id: 'dividend-right-scene-02', number: '02', title: '利润瀑布与公积金', ...SCENES['dividend-right-scene-02']},
  {id: 'dividend-right-scene-03', number: '03', title: '分红诉讼与违法分配', ...SCENES['dividend-right-scene-03']},
];
export const DividendRightPlayer=()=> <RemotionDeck animationId="dividend-right" title="分红权" component={DividendRight} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default DividendRightPlayer;
