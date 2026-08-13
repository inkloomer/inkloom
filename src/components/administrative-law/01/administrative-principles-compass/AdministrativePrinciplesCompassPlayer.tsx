import {AdministrativePrinciplesCompass} from '@/animations/administrative-law/01/administrative-principles-compass/remotion/AdministrativePrinciplesCompass';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/administrative-law/01/administrative-principles-compass/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'six-principles-overview',number:'01',title:'六原则总览',...SCENES['six-principles-overview']},
  {id:'legality-boundary',number:'02',title:'合法行政',...SCENES['legality-boundary']},
  {id:'reasonableness-scale',number:'03',title:'合理行政与比例原则',...SCENES['reasonableness-scale']},
  {id:'due-process-timeline',number:'04',title:'程序正当',...SCENES['due-process-timeline']},
  {id:'good-faith-vault',number:'05',title:'诚实守信与信赖保护',...SCENES['good-faith-vault']},
  {id:'efficiency-responsibility',number:'06',title:'高效便民与权责统一',...SCENES['efficiency-responsibility']},
  {id:'exam-triage',number:'07',title:'高频易错辨析',...SCENES['exam-triage']},
];
export const AdministrativePrinciplesCompassPlayer=()=> <RemotionDeck animationId="administrative-principles-compass" title="行政法的基本原则" component={AdministrativePrinciplesCompass} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default AdministrativePrinciplesCompassPlayer;
