import {CardSellingFundsViewpoint} from '@/animations/criminal/19/card-selling-funds-viewpoint/remotion/CardSellingFundsViewpoint';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/criminal/19/card-selling-funds-viewpoint/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'possession-models',number:'01',title:'事实占有与法律占有',...SCENES.possessionModels},
  {id:'lawful-funds',number:'02',title:'合法资金处理',...SCENES.lawfulFunds},
  {id:'illicit-funds',number:'03',title:'赃款处理三种观点',...SCENES.illicitFunds},
];
export const CardSellingFundsViewpointPlayer=()=> <RemotionDeck animationId="card-selling-funds-viewpoint" component={CardSellingFundsViewpoint} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="卖卡后资金处理观点"/>;
export default CardSellingFundsViewpointPlayer;
