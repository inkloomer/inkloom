import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CopyrightAuthorship} from '@/animations/intellectual-property-law/03/copyright-authorship/remotion/CopyrightAuthorship';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/03/copyright-authorship/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'copyright-authorship-scene-01', number: '01', title: '作者认定', ...SCENES['copyright-authorship-scene-01']},
  {id: 'copyright-authorship-scene-02', number: '02', title: '演绎汇编合作', ...SCENES['copyright-authorship-scene-02']},
  {id: 'copyright-authorship-scene-03', number: '03', title: '视听职务委托', ...SCENES['copyright-authorship-scene-03']},
  {id: 'copyright-authorship-scene-04', number: '04', title: '美术原件转移', ...SCENES['copyright-authorship-scene-04']},
];
export const CopyrightAuthorshipPlayer=()=> <RemotionDeck animationId="copyright-authorship" title="著作权主体" component={CopyrightAuthorship} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CopyrightAuthorshipPlayer;
