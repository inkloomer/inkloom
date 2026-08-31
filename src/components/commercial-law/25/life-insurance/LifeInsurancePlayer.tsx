import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {LifeInsurance} from '@/animations/commercial-law/25/life-insurance/remotion/LifeInsurance';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/25/life-insurance/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'life-insurance-scene-01', number: '01', title: '受益人指定变更', ...SCENES['life-insurance-scene-01']},
  {id: 'life-insurance-scene-02', number: '02', title: '受益人的确定', ...SCENES['life-insurance-scene-02']},
  {id: 'life-insurance-scene-03', number: '03', title: '中止与复效', ...SCENES['life-insurance-scene-03']},
  {id: 'life-insurance-scene-04', number: '04', title: '死亡险', ...SCENES['life-insurance-scene-04']},
  {id: 'life-insurance-scene-05', number: '05', title: '支付与特殊事故', ...SCENES['life-insurance-scene-05']},
];
export const LifeInsurancePlayer=()=> <RemotionDeck animationId="life-insurance" title="人身保险合同" component={LifeInsurance} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default LifeInsurancePlayer;
