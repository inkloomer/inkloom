import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CopyrightLimitations} from '@/animations/intellectual-property-law/04/copyright-limitations/remotion/CopyrightLimitations';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/04/copyright-limitations/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'copyright-limitations-scene-01', number: '01', title: '权利保护期', ...SCENES['copyright-limitations-scene-01']},
  {id: 'copyright-limitations-scene-02', number: '02', title: '合理使用', ...SCENES['copyright-limitations-scene-02']},
  {id: 'copyright-limitations-scene-03', number: '03', title: '法定许可', ...SCENES['copyright-limitations-scene-03']},
];
export const CopyrightLimitationsPlayer=()=> <RemotionDeck animationId="copyright-limitations" title="著作权的限制" component={CopyrightLimitations} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CopyrightLimitationsPlayer;
