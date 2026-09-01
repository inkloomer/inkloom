import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CopyrightContent} from '@/animations/intellectual-property-law/02/copyright-content/remotion/CopyrightContent';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/02/copyright-content/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'copyright-content-scene-01', number: '01', title: '著作人身权', ...SCENES['copyright-content-scene-01']},
  {id: 'copyright-content-scene-02', number: '02', title: '复制发行网传', ...SCENES['copyright-content-scene-02']},
  {id: 'copyright-content-scene-03', number: '03', title: '表演广播出租', ...SCENES['copyright-content-scene-03']},
];
export const CopyrightContentPlayer=()=> <RemotionDeck animationId="copyright-content" title="著作权的内容" component={CopyrightContent} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CopyrightContentPlayer;
