import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {TaxLaw} from '@/animations/economic-law/07/tax-law/remotion/TaxLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/07/tax-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'tax-law-scene-01', number: '01', title: '增值税消费税', ...SCENES['tax-law-scene-01']},
  {id: 'tax-law-scene-02', number: '02', title: '个人所得税', ...SCENES['tax-law-scene-02']},
  {id: 'tax-law-scene-03', number: '03', title: '企税与保全', ...SCENES['tax-law-scene-03']},
  {id: 'tax-law-scene-04', number: '04', title: '优先权与审计', ...SCENES['tax-law-scene-04']},
];
export const TaxLawPlayer=()=> <RemotionDeck animationId="tax-law" title="财税法" component={TaxLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default TaxLawPlayer;
