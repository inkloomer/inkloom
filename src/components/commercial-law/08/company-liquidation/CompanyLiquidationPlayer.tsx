import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CompanyLiquidation} from '@/animations/commercial-law/08/company-liquidation/remotion/CompanyLiquidation';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/08/company-liquidation/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'company-liquidation-scene-01', number: '01', title: '自行清算与指定清算', ...SCENES['company-liquidation-scene-01']},
  {id: 'company-liquidation-scene-02', number: '02', title: '简易注销与强制注销', ...SCENES['company-liquidation-scene-02']},
  {id: 'company-liquidation-scene-03', number: '03', title: '清算财产的分配顺序', ...SCENES['company-liquidation-scene-03']},
];
export const CompanyLiquidationPlayer=()=> <RemotionDeck animationId="company-liquidation" title="公司的清算" component={CompanyLiquidation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CompanyLiquidationPlayer;
