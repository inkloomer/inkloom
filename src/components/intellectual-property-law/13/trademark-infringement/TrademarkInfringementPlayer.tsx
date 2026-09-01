import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {TrademarkInfringement} from '@/animations/intellectual-property-law/13/trademark-infringement/remotion/TrademarkInfringement';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/13/trademark-infringement/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'trademark-infringement-scene-01', number: '01', title: '侵权四行为', ...SCENES['trademark-infringement-scene-01']},
  {id: 'trademark-infringement-scene-02', number: '02', title: '不侵权抗辩', ...SCENES['trademark-infringement-scene-02']},
];
export const TrademarkInfringementPlayer=()=> <RemotionDeck animationId="trademark-infringement" title="商标权侵权" component={TrademarkInfringement} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default TrademarkInfringementPlayer;
