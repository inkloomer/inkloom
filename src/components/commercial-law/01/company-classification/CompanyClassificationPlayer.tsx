import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CompanyClassification} from '@/animations/commercial-law/01/company-classification/remotion/CompanyClassification';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/01/company-classification/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'company-classification-scene-01', number: '01', title: '概念与责任能力', ...SCENES['company-classification-scene-01']},
  {id: 'company-classification-scene-02', number: '02', title: '营业执照与诉讼地位', ...SCENES['company-classification-scene-02']},
  {id: 'company-classification-scene-03', number: '03', title: '分公司的执行顺序', ...SCENES['company-classification-scene-03']},
];
export const CompanyClassificationPlayer=()=> <RemotionDeck animationId="company-classification" title="公司的分类" component={CompanyClassification} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CompanyClassificationPlayer;
