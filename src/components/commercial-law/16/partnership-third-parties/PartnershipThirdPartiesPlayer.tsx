import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PartnershipThirdParties} from '@/animations/commercial-law/16/partnership-third-parties/remotion/PartnershipThirdParties';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/16/partnership-third-parties/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'partnership-third-parties-scene-01', number: '01', title: '合伙企业欠债', ...SCENES['partnership-third-parties-scene-01']},
  {id: 'partnership-third-parties-scene-02', number: '02', title: '合伙人欠债', ...SCENES['partnership-third-parties-scene-02']},
  {id: 'partnership-third-parties-scene-03', number: '03', title: '双重优先原则', ...SCENES['partnership-third-parties-scene-03']},
];
export const PartnershipThirdPartiesPlayer=()=> <RemotionDeck animationId="partnership-third-parties" title="与第三人的关系" component={PartnershipThirdParties} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PartnershipThirdPartiesPlayer;
