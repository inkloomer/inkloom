import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {IpInfringementLitigation} from '@/animations/intellectual-property-law/14/ip-infringement-litigation/remotion/IpInfringementLitigation';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/14/ip-infringement-litigation/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'ip-infringement-litigation-scene-01', number: '01', title: '许可与起诉', ...SCENES['ip-infringement-litigation-scene-01']},
  {id: 'ip-infringement-litigation-scene-02', number: '02', title: '管辖与赔偿', ...SCENES['ip-infringement-litigation-scene-02']},
];
export const IpInfringementLitigationPlayer=()=> <RemotionDeck animationId="ip-infringement-litigation" title="知识产权侵权诉讼" component={IpInfringementLitigation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default IpInfringementLitigationPlayer;
