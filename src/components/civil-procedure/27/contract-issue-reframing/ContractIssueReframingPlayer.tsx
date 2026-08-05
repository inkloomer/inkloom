import {typography} from '@/animations/civil-procedure/27/contract-issue-reframing/animation.meta';
import {ContractIssueReframing} from '@/animations/civil-procedure/27/contract-issue-reframing/remotion/ContractIssueReframing';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/27/contract-issue-reframing/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'pleaded-contract-positions',number:'01',title:'当事人提出的效力主张不是终点',...SCENES.pleadedContractPositions},
  {id:'formation-focus-reset',number:'02',title:'法院应把“是否成立”重定为焦点',...SCENES.formationFocusReset},
  {id:'claim-change-and-evidence-window',number:'03',title:'诉请变更与重新指定举证期限',...SCENES.claimChangeAndEvidenceWindow},
];
export default ()=> <RemotionDeck animationId="contract-issue-reframing" component={ContractIssueReframing} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="合同效力争点重定" typography={typography} typographyScope={{animationId:'contract-issue-reframing',subject:'civil-procedure',topic:'27'}}/>;
