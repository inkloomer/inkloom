import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PatentSubjectMatter} from '@/animations/intellectual-property-law/06/patent-subject-matter/remotion/PatentSubjectMatter';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/06/patent-subject-matter/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'patent-subject-matter-scene-01', number: '01', title: '对象与新颖性', ...SCENES['patent-subject-matter-scene-01']},
  {id: 'patent-subject-matter-scene-02', number: '02', title: '不授三闸', ...SCENES['patent-subject-matter-scene-02']},
];
export const PatentSubjectMatterPlayer=()=> <RemotionDeck animationId="patent-subject-matter" title="专利权的客体" component={PatentSubjectMatter} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PatentSubjectMatterPlayer;
