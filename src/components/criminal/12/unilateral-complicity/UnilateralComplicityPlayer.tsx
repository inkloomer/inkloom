import {UnilateralComplicity} from '@/animations/criminal/12/unilateral-complicity/remotion/UnilateralComplicity';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/12/unilateral-complicity/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'unilateral-overview', number: '01', title: '片面共犯：单方面构成的共同犯罪', ...SCENES.unilateralOverview},
  {id: 'unilateral-help-case', number: '02', title: '片面帮助：暗中绊倒案', ...SCENES.unilateralHelpCase},
  {id: 'unilateral-lookout-debate', number: '03', title: '片面望风：无异常也算帮助吗', ...SCENES.unilateralLookoutDebate},
  {id: 'unilateral-instigation-case', number: '04', title: '片面教唆：通奸照片案', ...SCENES.unilateralInstigationCase},
  {id: 'unilateral-execution-case', number: '05', title: '片面实行：提前打晕案', ...SCENES.unilateralExecutionCase},
  {id: 'exam-two-cases', number: '06', title: '两道真题：片面共犯的实战', ...SCENES.examTwoCases},
];

export const UnilateralComplicityPlayer = () => <RemotionDeck animationId="unilateral-complicity" component={UnilateralComplicity} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="共同犯罪（五）：片面的共同犯罪" />;
export default UnilateralComplicityPlayer;
