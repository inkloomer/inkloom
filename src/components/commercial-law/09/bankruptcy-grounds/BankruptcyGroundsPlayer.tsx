import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BankruptcyGrounds} from '@/animations/commercial-law/09/bankruptcy-grounds/remotion/BankruptcyGrounds';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/09/bankruptcy-grounds/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'bankruptcy-grounds-scene-01', number: '01', title: '破产原因的三项判定', ...SCENES['bankruptcy-grounds-scene-01']},
  {id: 'bankruptcy-grounds-scene-02', number: '02', title: '缺乏清偿力的四种情形', ...SCENES['bankruptcy-grounds-scene-02']},
  {id: 'bankruptcy-grounds-scene-03', number: '03', title: '仅看债务人自身', ...SCENES['bankruptcy-grounds-scene-03']},
];
export const BankruptcyGroundsPlayer=()=> <RemotionDeck animationId="bankruptcy-grounds" title="破产原因" component={BankruptcyGrounds} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BankruptcyGroundsPlayer;
