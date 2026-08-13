import {AdministrativeSubjectCommand} from '@/animations/administrative-law/02/administrative-subject-command/remotion/AdministrativeSubjectCommand';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/administrative-law/02/administrative-subject-command/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
 {id:'subject-identity-radar',number:'01',title:'行政主体身份判定',...SCENES['subject-identity-radar']},
 {id:'public-person-shell',number:'02',title:'公法人结构',...SCENES['public-person-shell']},
 {id:'twelve-agency-tree',number:'03',title:'12类行政机关',...SCENES['twelve-agency-tree']},
 {id:'dispatched-unit-switch',number:'04',title:'派出机关与派出机构',...SCENES['dispatched-unit-switch']},
 {id:'authorization-delegation-tracks',number:'05',title:'授权与委托',...SCENES['authorization-delegation-tracks']},
 {id:'power-name-gates',number:'06',title:'权名两步法',...SCENES['power-name-gates']},
 {id:'central-agency-hangars',number:'07',title:'国务院机构类型',...SCENES['central-agency-hangars']},
 {id:'non-subject-quarantine',number:'08',title:'非主体机构隔离',...SCENES['non-subject-quarantine']},
 {id:'staffing-command-network',number:'09',title:'机构编制管理',...SCENES['staffing-command-network']},
];
export const AdministrativeSubjectCommandPlayer=()=> <RemotionDeck animationId="administrative-subject-command" title="行政主体" component={AdministrativeSubjectCommand} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default AdministrativeSubjectCommandPlayer;
