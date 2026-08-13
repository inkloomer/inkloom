import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CompanyPersonality} from '@/animations/commercial-law/01/company-personality/remotion/CompanyPersonality';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/01/company-personality/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'company-personality-scene-01', number: '01', title: '独立人格三独立与责任分配', ...SCENES['company-personality-scene-01']},
  {id: 'company-personality-scene-02', number: '02', title: '滥用股东权利与连带责任', ...SCENES['company-personality-scene-02']},
  {id: 'company-personality-scene-03', number: '03', title: '例外规则与起诉路径', ...SCENES['company-personality-scene-03']},
];
export const CompanyPersonalityPlayer=()=> <RemotionDeck animationId="company-personality" title="公司独立人格与人格否认" component={CompanyPersonality} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CompanyPersonalityPlayer;
