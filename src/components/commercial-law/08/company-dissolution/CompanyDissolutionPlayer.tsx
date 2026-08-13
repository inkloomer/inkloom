import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CompanyDissolution} from '@/animations/commercial-law/08/company-dissolution/remotion/CompanyDissolution';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/08/company-dissolution/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'company-dissolution-scene-01', number: '01', title: '解散的三种原因', ...SCENES['company-dissolution-scene-01']},
  {id: 'company-dissolution-scene-02', number: '02', title: '司法解散的受理边界', ...SCENES['company-dissolution-scene-02']},
  {id: 'company-dissolution-scene-03', number: '03', title: '诉讼主体与调解救济', ...SCENES['company-dissolution-scene-03']},
];
export const CompanyDissolutionPlayer=()=> <RemotionDeck animationId="company-dissolution" title="公司的解散" component={CompanyDissolution} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CompanyDissolutionPlayer;
