import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {UrbanRuralPlanningLaw} from '@/animations/economic-law/09/urban-rural-planning-law/remotion/UrbanRuralPlanningLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/09/urban-rural-planning-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'urban-rural-planning-law-scene-01', number: '01', title: '许可三条路', ...SCENES['urban-rural-planning-law-scene-01']},
  {id: 'urban-rural-planning-law-scene-02', number: '02', title: '临时建设', ...SCENES['urban-rural-planning-law-scene-02']},
  {id: 'urban-rural-planning-law-scene-03', number: '03', title: '出让与划拨', ...SCENES['urban-rural-planning-law-scene-03']},
];
export const UrbanRuralPlanningLawPlayer=()=> <RemotionDeck animationId="urban-rural-planning-law" title="城乡规划法" component={UrbanRuralPlanningLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default UrbanRuralPlanningLawPlayer;
