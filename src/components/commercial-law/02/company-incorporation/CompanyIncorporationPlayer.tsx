import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CompanyIncorporation} from '@/animations/commercial-law/02/company-incorporation/remotion/CompanyIncorporation';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/02/company-incorporation/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'company-incorporation-scene-01', number: '01', title: '发起设立与募集设立', ...SCENES['company-incorporation-scene-01']},
  {id: 'company-incorporation-scene-02', number: '02', title: '募集流程与成立大会', ...SCENES['company-incorporation-scene-02']},
  {id: 'company-incorporation-scene-03', number: '03', title: '设立条件与章程效力', ...SCENES['company-incorporation-scene-03']},
];
export const CompanyIncorporationPlayer=()=> <RemotionDeck animationId="company-incorporation" title="公司设立概述" component={CompanyIncorporation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CompanyIncorporationPlayer;
