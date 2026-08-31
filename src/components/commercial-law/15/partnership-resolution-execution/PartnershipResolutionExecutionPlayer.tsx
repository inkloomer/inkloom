import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PartnershipResolutionExecution} from '@/animations/commercial-law/15/partnership-resolution-execution/remotion/PartnershipResolutionExecution';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/15/partnership-resolution-execution/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'partnership-resolution-execution-scene-01', number: '01', title: '决议规则', ...SCENES['partnership-resolution-execution-scene-01']},
  {id: 'partnership-resolution-execution-scene-02', number: '02', title: '事务执行', ...SCENES['partnership-resolution-execution-scene-02']},
  {id: 'partnership-resolution-execution-scene-03', number: '03', title: '越权责任', ...SCENES['partnership-resolution-execution-scene-03']},
  {id: 'partnership-resolution-execution-scene-04', number: '04', title: '限制与外聘', ...SCENES['partnership-resolution-execution-scene-04']},
];
export const PartnershipResolutionExecutionPlayer=()=> <RemotionDeck animationId="partnership-resolution-execution" title="决议与事务执行" component={PartnershipResolutionExecution} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PartnershipResolutionExecutionPlayer;
