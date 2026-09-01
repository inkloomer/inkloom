import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {TrademarkAcquisition} from '@/animations/intellectual-property-law/11/trademark-acquisition/remotion/TrademarkAcquisition';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/11/trademark-acquisition/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'trademark-acquisition-scene-01', number: '01', title: '申请原则与代理', ...SCENES['trademark-acquisition-scene-01']},
  {id: 'trademark-acquisition-scene-02', number: '02', title: '异议制度', ...SCENES['trademark-acquisition-scene-02']},
];
export const TrademarkAcquisitionPlayer=()=> <RemotionDeck animationId="trademark-acquisition" title="商标权取得" component={TrademarkAcquisition} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default TrademarkAcquisitionPlayer;
