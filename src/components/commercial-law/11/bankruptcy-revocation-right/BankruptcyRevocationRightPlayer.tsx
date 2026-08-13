import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {BankruptcyRevocationRight} from '@/animations/commercial-law/11/bankruptcy-revocation-right/remotion/BankruptcyRevocationRight';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/11/bankruptcy-revocation-right/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'bankruptcy-revocation-right-scene-01', number: '01', title: '临界期四阶段', ...SCENES['bankruptcy-revocation-right-scene-01']},
  {id: 'bankruptcy-revocation-right-scene-02', number: '02', title: '欺诈破产行为', ...SCENES['bankruptcy-revocation-right-scene-02']},
  {id: 'bankruptcy-revocation-right-scene-03', number: '03', title: '个别清偿的例外', ...SCENES['bankruptcy-revocation-right-scene-03']},
];
export const BankruptcyRevocationRightPlayer=()=> <RemotionDeck animationId="bankruptcy-revocation-right" title="破产撤销权" component={BankruptcyRevocationRight} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default BankruptcyRevocationRightPlayer;
