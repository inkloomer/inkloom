import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {LandManagementLaw} from '@/animations/economic-law/08/land-management-law/remotion/LandManagementLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/08/land-management-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'land-management-law-scene-01', number: '01', title: '建设用地', ...SCENES['land-management-law-scene-01']},
  {id: 'land-management-law-scene-02', number: '02', title: '永久基本农田', ...SCENES['land-management-law-scene-02']},
  {id: 'land-management-law-scene-03', number: '03', title: '征收与争议', ...SCENES['land-management-law-scene-03']},
];
export const LandManagementLawPlayer=()=> <RemotionDeck animationId="land-management-law" title="土地管理法" component={LandManagementLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default LandManagementLawPlayer;
