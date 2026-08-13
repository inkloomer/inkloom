import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ClaimFiling} from '@/animations/commercial-law/10/claim-filing/remotion/ClaimFiling';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/10/claim-filing/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'claim-filing-scene-01', number: '01', title: '申报范围与期限', ...SCENES['claim-filing-scene-01']},
  {id: 'claim-filing-scene-02', number: '02', title: '债务人破产时保证人申报', ...SCENES['claim-filing-scene-02']},
  {id: 'claim-filing-scene-03', number: '03', title: '保证人破产与双破产', ...SCENES['claim-filing-scene-03']},
];
export const ClaimFilingPlayer=()=> <RemotionDeck animationId="claim-filing" title="债权申报" component={ClaimFiling} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ClaimFilingPlayer;
