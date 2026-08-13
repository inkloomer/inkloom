import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BankruptcyLiquidation} from '@/animations/commercial-law/12/bankruptcy-liquidation/remotion/BankruptcyLiquidation';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/12/bankruptcy-liquidation/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'bankruptcy-liquidation-scene-01', number: '01', title: '宣告破产的效果', ...SCENES['bankruptcy-liquidation-scene-01']},
  {id: 'bankruptcy-liquidation-scene-02', number: '02', title: '别除权与集体清偿', ...SCENES['bankruptcy-liquidation-scene-02']},
  {id: 'bankruptcy-liquidation-scene-03', number: '03', title: '清偿顺序瀑布', ...SCENES['bankruptcy-liquidation-scene-03']},
];
export const BankruptcyLiquidationPlayer=()=> <RemotionDeck animationId="bankruptcy-liquidation" title="破产清算程序" component={BankruptcyLiquidation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BankruptcyLiquidationPlayer;
