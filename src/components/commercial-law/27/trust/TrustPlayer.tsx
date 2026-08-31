import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {Trust} from '@/animations/commercial-law/27/trust/remotion/Trust';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/27/trust/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'trust-scene-01', number: '01', title: '信托设立', ...SCENES['trust-scene-01']},
  {id: 'trust-scene-02', number: '02', title: '信托财产独立性', ...SCENES['trust-scene-02']},
  {id: 'trust-scene-03', number: '03', title: '三方当事人', ...SCENES['trust-scene-03']},
  {id: 'trust-scene-04', number: '04', title: '变更与终止', ...SCENES['trust-scene-04']},
];
export const TrustPlayer=()=> <RemotionDeck animationId="trust" title="信托法" component={Trust} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default TrustPlayer;
