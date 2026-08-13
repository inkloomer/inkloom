import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {LlcEquityTransfer} from '@/animations/commercial-law/07/llc-equity-transfer/remotion/LlcEquityTransfer';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/07/llc-equity-transfer/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'llc-equity-transfer-scene-01', number: '01', title: '对内与对外转让', ...SCENES['llc-equity-transfer-scene-01']},
  {id: 'llc-equity-transfer-scene-02', number: '02', title: '侵害优先购买权之后', ...SCENES['llc-equity-transfer-scene-02']},
  {id: 'llc-equity-transfer-scene-03', number: '03', title: '特殊转让与异议回购', ...SCENES['llc-equity-transfer-scene-03']},
];
export const LlcEquityTransferPlayer=()=> <RemotionDeck animationId="llc-equity-transfer" title="有限公司股权转让" component={LlcEquityTransfer} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default LlcEquityTransferPlayer;
