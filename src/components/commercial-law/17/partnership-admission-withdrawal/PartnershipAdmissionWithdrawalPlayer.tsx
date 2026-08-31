import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PartnershipAdmissionWithdrawal} from '@/animations/commercial-law/17/partnership-admission-withdrawal/remotion/PartnershipAdmissionWithdrawal';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/17/partnership-admission-withdrawal/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'partnership-admission-withdrawal-scene-01', number: '01', title: '入伙', ...SCENES['partnership-admission-withdrawal-scene-01']},
  {id: 'partnership-admission-withdrawal-scene-02', number: '02', title: '自愿与除名退伙', ...SCENES['partnership-admission-withdrawal-scene-02']},
  {id: 'partnership-admission-withdrawal-scene-03', number: '03', title: '当然退伙与效力', ...SCENES['partnership-admission-withdrawal-scene-03']},
];
export const PartnershipAdmissionWithdrawalPlayer=()=> <RemotionDeck animationId="partnership-admission-withdrawal" title="入伙、退伙" component={PartnershipAdmissionWithdrawal} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PartnershipAdmissionWithdrawalPlayer;
