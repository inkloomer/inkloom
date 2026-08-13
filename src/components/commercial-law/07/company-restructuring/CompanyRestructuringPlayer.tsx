import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {CompanyRestructuring} from '@/animations/commercial-law/07/company-restructuring/remotion/CompanyRestructuring';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/07/company-restructuring/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'company-restructuring-scene-01', number: '01', title: '增资与减资', ...SCENES['company-restructuring-scene-01']},
  {id: 'company-restructuring-scene-02', number: '02', title: '合并与分立', ...SCENES['company-restructuring-scene-02']},
  {id: 'company-restructuring-scene-03', number: '03', title: '减资程序与违法减资', ...SCENES['company-restructuring-scene-03']},
];
export const CompanyRestructuringPlayer=()=> <RemotionDeck animationId="company-restructuring" title="公司的合并、分立、增资、减资" component={CompanyRestructuring} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CompanyRestructuringPlayer;
