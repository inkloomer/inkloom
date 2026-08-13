import {AbstractActPrintworks} from '@/animations/administrative-law/04/abstract-act-printworks/remotion/AbstractActPrintworks';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/administrative-law/04/abstract-act-printworks/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
 {id:'legislation-print-line',number:'01',title:'制定程序总线',...SCENES['legislation-print-line']},
 {id:'project-intake-sieve',number:'02',title:'立项筛选',...SCENES['project-intake-sieve']},
 {id:'drafting-cross-table',number:'03',title:'四向起草',...SCENES['drafting-cross-table']},
 {id:'review-dispute-mixer',number:'04',title:'审查与协调',...SCENES['review-dispute-mixer']},
 {id:'decision-publication-press',number:'05',title:'决定与公布',...SCENES['decision-publication-press']},
 {id:'interpretation-fork-plate',number:'06',title:'解释分流',...SCENES['interpretation-fork-plate']},
 {id:'maker-name-dual-plate',number:'07',title:'制定机关与名称',...SCENES['maker-name-dual-plate']},
 {id:'decision-edition-filing-routes',number:'08',title:'决定刊行备案',...SCENES['decision-edition-filing-routes']},
 {id:'reporting-level-switch',number:'09',title:'报告制度',...SCENES['reporting-level-switch']},
 {id:'shall-semantics-balance',number:'10',title:'应当的语义',...SCENES['shall-semantics-balance']},
];
export const AbstractActPrintworksPlayer=()=> <RemotionDeck animationId="abstract-act-printworks" title="抽象行政行为" component={AbstractActPrintworks} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default AbstractActPrintworksPlayer;
