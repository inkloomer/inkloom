import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {InsurancePrinciples} from '@/animations/commercial-law/23/insurance-principles/remotion/InsurancePrinciples';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/23/insurance-principles/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'insurance-principles-scene-01', number: '01', title: '保险利益', ...SCENES['insurance-principles-scene-01']},
  {id: 'insurance-principles-scene-02', number: '02', title: '可为谁投保', ...SCENES['insurance-principles-scene-02']},
  {id: 'insurance-principles-scene-03', number: '03', title: '最大诚信', ...SCENES['insurance-principles-scene-03']},
];
export const InsurancePrinciplesPlayer=()=> <RemotionDeck animationId="insurance-principles" title="保险基本原则" component={InsurancePrinciples} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default InsurancePrinciplesPlayer;
