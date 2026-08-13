import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CompanyCapacity} from '@/animations/commercial-law/01/company-capacity/remotion/CompanyCapacity';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/01/company-capacity/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'company-capacity-scene-01', number: '01', title: '能力起止与经营范围', ...SCENES['company-capacity-scene-01']},
  {id: 'company-capacity-scene-02', number: '02', title: '关联与非关联担保决议', ...SCENES['company-capacity-scene-02']},
  {id: 'company-capacity-scene-03', number: '03', title: '无须机关决议的担保', ...SCENES['company-capacity-scene-03']},
];
export const CompanyCapacityPlayer=()=> <RemotionDeck animationId="company-capacity" title="公司的能力" component={CompanyCapacity} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CompanyCapacityPlayer;
