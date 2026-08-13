import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CreditorsMeeting} from '@/animations/commercial-law/10/creditors-meeting/remotion/CreditorsMeeting';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/10/creditors-meeting/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'creditors-meeting-scene-01', number: '01', title: '三会类比', ...SCENES['creditors-meeting-scene-01']},
  {id: 'creditors-meeting-scene-02', number: '02', title: '职权与决议规则', ...SCENES['creditors-meeting-scene-02']},
  {id: 'creditors-meeting-scene-03', number: '03', title: '重大财产处分的流程', ...SCENES['creditors-meeting-scene-03']},
];
export const CreditorsMeetingPlayer=()=> <RemotionDeck animationId="creditors-meeting" title="债权人会议及债权人委员会" component={CreditorsMeeting} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CreditorsMeetingPlayer;
