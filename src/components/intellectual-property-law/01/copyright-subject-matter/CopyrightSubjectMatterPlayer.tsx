import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CopyrightSubjectMatter} from '@/animations/intellectual-property-law/01/copyright-subject-matter/remotion/CopyrightSubjectMatter';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/01/copyright-subject-matter/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'copyright-subject-matter-scene-01', number: '01', title: '作品认定', ...SCENES['copyright-subject-matter-scene-01']},
  {id: 'copyright-subject-matter-scene-02', number: '02', title: '保护条件', ...SCENES['copyright-subject-matter-scene-02']},
  {id: 'copyright-subject-matter-scene-03', number: '03', title: '三类排除', ...SCENES['copyright-subject-matter-scene-03']},
];
export const CopyrightSubjectMatterPlayer=()=> <RemotionDeck animationId="copyright-subject-matter" title="著作权客体" component={CopyrightSubjectMatter} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CopyrightSubjectMatterPlayer;
