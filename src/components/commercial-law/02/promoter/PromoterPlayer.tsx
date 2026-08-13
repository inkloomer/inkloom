import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {Promoter} from '@/animations/commercial-law/02/promoter/remotion/Promoter';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/02/promoter/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'promoter-scene-01', number: '01', title: '设立中的民事活动责任', ...SCENES['promoter-scene-01']},
  {id: 'promoter-scene-02', number: '02', title: '出资瑕疵与抽逃出资', ...SCENES['promoter-scene-02']},
  {id: 'promoter-scene-03', number: '03', title: '股东失权流程', ...SCENES['promoter-scene-03']},
];
export const PromoterPlayer=()=> <RemotionDeck animationId="promoter" title="发起人" component={Promoter} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PromoterPlayer;
