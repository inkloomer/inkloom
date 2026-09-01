import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PatentGrant} from '@/animations/intellectual-property-law/07/patent-grant/remotion/PatentGrant';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/07/patent-grant/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'patent-grant-scene-01', number: '01', title: '四类归属', ...SCENES['patent-grant-scene-01']},
  {id: 'patent-grant-scene-02', number: '02', title: '申请原则', ...SCENES['patent-grant-scene-02']},
];
export const PatentGrantPlayer=()=> <RemotionDeck animationId="patent-grant" title="专利权的获得" component={PatentGrant} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PatentGrantPlayer;
