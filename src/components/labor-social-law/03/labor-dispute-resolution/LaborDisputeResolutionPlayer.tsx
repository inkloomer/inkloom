import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {LaborDisputeResolution} from '@/animations/labor-social-law/03/labor-dispute-resolution/remotion/LaborDisputeResolution';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/labor-social-law/03/labor-dispute-resolution/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'labor-dispute-resolution-scene-01', number: '01', title: '争议四步走', ...SCENES['labor-dispute-resolution-scene-01']},
  {id: 'labor-dispute-resolution-scene-02', number: '02', title: '一裁终局', ...SCENES['labor-dispute-resolution-scene-02']},
  {id: 'labor-dispute-resolution-scene-03', number: '03', title: '不予执行', ...SCENES['labor-dispute-resolution-scene-03']},
];
export const LaborDisputeResolutionPlayer=()=> <RemotionDeck animationId="labor-dispute-resolution" title="劳动争议解决" component={LaborDisputeResolution} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default LaborDisputeResolutionPlayer;
