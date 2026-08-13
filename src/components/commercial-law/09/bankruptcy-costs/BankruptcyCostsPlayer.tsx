import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BankruptcyCosts} from '@/animations/commercial-law/09/bankruptcy-costs/remotion/BankruptcyCosts';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/09/bankruptcy-costs/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'bankruptcy-costs-scene-01', number: '01', title: '破产费用与共益债务', ...SCENES['bankruptcy-costs-scene-01']},
  {id: 'bankruptcy-costs-scene-02', number: '02', title: '共益债务的六项', ...SCENES['bankruptcy-costs-scene-02']},
  {id: 'bankruptcy-costs-scene-03', number: '03', title: '清偿规则', ...SCENES['bankruptcy-costs-scene-03']},
];
export const BankruptcyCostsPlayer=()=> <RemotionDeck animationId="bankruptcy-costs" title="破产费用和共益债务" component={BankruptcyCosts} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BankruptcyCostsPlayer;
