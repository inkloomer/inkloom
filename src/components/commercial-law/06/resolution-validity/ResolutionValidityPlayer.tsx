import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ResolutionValidity} from '@/animations/commercial-law/06/resolution-validity/remotion/ResolutionValidity';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/06/resolution-validity/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'resolution-validity-scene-01', number: '01', title: '不成立、无效与可撤销', ...SCENES['resolution-validity-scene-01']},
  {id: 'resolution-validity-scene-02', number: '02', title: '轻微与重大瑕疵', ...SCENES['resolution-validity-scene-02']},
  {id: 'resolution-validity-scene-03', number: '03', title: '撤销之诉的期限与效果', ...SCENES['resolution-validity-scene-03']},
];
export const ResolutionValidityPlayer=()=> <RemotionDeck animationId="resolution-validity" title="公司决议效力" component={ResolutionValidity} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ResolutionValidityPlayer;
