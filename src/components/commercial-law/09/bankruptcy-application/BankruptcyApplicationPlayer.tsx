import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BankruptcyApplication} from '@/animations/commercial-law/09/bankruptcy-application/remotion/BankruptcyApplication';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/09/bankruptcy-application/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'bankruptcy-application-scene-01', number: '01', title: '谁可以申请什么', ...SCENES['bankruptcy-application-scene-01']},
  {id: 'bankruptcy-application-scene-02', number: '02', title: '受理后的三重效果', ...SCENES['bankruptcy-application-scene-02']},
  {id: 'bankruptcy-application-scene-03', number: '03', title: '集中管辖的时点', ...SCENES['bankruptcy-application-scene-03']},
];
export const BankruptcyApplicationPlayer=()=> <RemotionDeck animationId="bankruptcy-application" title="破产申请与受理" component={BankruptcyApplication} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BankruptcyApplicationPlayer;
