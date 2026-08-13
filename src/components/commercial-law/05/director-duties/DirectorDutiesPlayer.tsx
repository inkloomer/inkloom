import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {DirectorDuties} from '@/animations/commercial-law/05/director-duties/remotion/DirectorDuties';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/05/director-duties/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'director-duties-scene-01', number: '01', title: '任职资格的禁入情形', ...SCENES['director-duties-scene-01']},
  {id: 'director-duties-scene-02', number: '02', title: '绝对禁止与相对禁止', ...SCENES['director-duties-scene-02']},
  {id: 'director-duties-scene-03', number: '03', title: '四条责任线', ...SCENES['director-duties-scene-03']},
];
export const DirectorDutiesPlayer=()=> <RemotionDeck animationId="director-duties" title="董监高的任职资格和义务" component={DirectorDuties} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default DirectorDutiesPlayer;
