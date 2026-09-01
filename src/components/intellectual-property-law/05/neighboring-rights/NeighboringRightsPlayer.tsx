import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {NeighboringRights} from '@/animations/intellectual-property-law/05/neighboring-rights/remotion/NeighboringRights';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/05/neighboring-rights/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'neighboring-rights-scene-01', number: '01', title: '三主体', ...SCENES['neighboring-rights-scene-01']},
  {id: 'neighboring-rights-scene-02', number: '02', title: '侵权判断', ...SCENES['neighboring-rights-scene-02']},
];
export const NeighboringRightsPlayer=()=> <RemotionDeck animationId="neighboring-rights" title="邻接权" component={NeighboringRights} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default NeighboringRightsPlayer;
