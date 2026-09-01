import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {LaborLaw} from '@/animations/labor-social-law/01/labor-law/remotion/LaborLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/labor-social-law/01/labor-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'labor-law-scene-01', number: '01', title: '工时与年休假', ...SCENES['labor-law-scene-01']},
  {id: 'labor-law-scene-02', number: '02', title: '加班与工资', ...SCENES['labor-law-scene-02']},
  {id: 'labor-law-scene-03', number: '03', title: '特殊保护', ...SCENES['labor-law-scene-03']},
];
export const LaborLawPlayer=()=> <RemotionDeck animationId="labor-law" title="劳动法" component={LaborLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default LaborLawPlayer;
