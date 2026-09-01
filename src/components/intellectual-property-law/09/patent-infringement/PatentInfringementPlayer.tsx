import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PatentInfringement} from '@/animations/intellectual-property-law/09/patent-infringement/remotion/PatentInfringement';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/09/patent-infringement/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'patent-infringement-scene-01', number: '01', title: '构成侵权', ...SCENES['patent-infringement-scene-01']},
  {id: 'patent-infringement-scene-02', number: '02', title: '七道免责盾', ...SCENES['patent-infringement-scene-02']},
];
export const PatentInfringementPlayer=()=> <RemotionDeck animationId="patent-infringement" title="专利权侵权" component={PatentInfringement} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PatentInfringementPlayer;
