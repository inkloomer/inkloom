import {PenaltyVerdictArena} from '@/animations/administrative-law/07/penalty-verdict-arena/remotion/PenaltyVerdictArena';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/administrative-law/07/penalty-verdict-arena/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id:'sanction-definition-filter',number:'01',title:'惩戒定义过滤器',...SCENES['sanction-definition-filter']},
  {id:'five-sanction-machines',number:'02',title:'五类处罚装置',...SCENES['five-sanction-machines']},
  {id:'power-routing-split',number:'03',title:'处罚权分流',...SCENES['power-routing-split']},
  {id:'rulemaking-mold-ladder',number:'04',title:'五级设定权铸模',...SCENES['rulemaking-mold-ladder']},
  {id:'specification-benchmark-rail',number:'05',title:'规定权校准轨',...SCENES['specification-benchmark-rail']},
  {id:'supplemental-setting-chamber',number:'06',title:'补充设定密室',...SCENES['supplemental-setting-chamber']},
  {id:'implementation-role-triangle',number:'07',title:'实施主体三角',...SCENES['implementation-role-triangle']},
  {id:'jurisdiction-arena-map',number:'08',title:'管辖赛区地图',...SCENES['jurisdiction-arena-map']},
  {id:'ordinary-procedure-racetrack',number:'09',title:'普通程序跑道',...SCENES['ordinary-procedure-racetrack']},
  {id:'legal-review-lock',number:'10',title:'法制审核锁',...SCENES['legal-review-lock']},
  {id:'summary-threshold-scales',number:'11',title:'简易程序双秤',...SCENES['summary-threshold-scales']},
  {id:'hearing-scope-amphitheater',number:'12',title:'听证范围剧场',...SCENES['hearing-scope-amphitheater']},
  {id:'hearing-procedure-console',number:'13',title:'听证程序控制台',...SCENES['hearing-procedure-console']},
  {id:'participation-rule-scoreboard',number:'14',title:'实施规则记分牌',...SCENES['participation-rule-scoreboard']},
  {id:'limitation-liability-dial',number:'15',title:'追责表盘',...SCENES['limitation-liability-dial']},
  {id:'evidence-monitoring-wall',number:'16',title:'证据与监控墙',...SCENES['evidence-monitoring-wall']},
  {id:'public-security-sanction-vault',number:'17',title:'治安处罚保险库',...SCENES['public-security-sanction-vault']},
  {id:'summons-interview-clocks',number:'18',title:'传唤询问时钟',...SCENES['summons-interview-clocks']},
  {id:'inspection-seizure-scene',number:'19',title:'检查扣押现场',...SCENES['inspection-seizure-scene']},
  {id:'single-officer-camera-wall',number:'20',title:'六机位监控墙',...SCENES['single-officer-camera-wall']},
  {id:'mediation-privacy-fork',number:'21',title:'调解隐私分叉',...SCENES['mediation-privacy-fork']},
  {id:'fine-execution-settlement-chain',number:'22',title:'罚款执行结算链',...SCENES['fine-execution-settlement-chain']},
  {id:'detention-suspension-airlock',number:'23',title:'拘留暂缓四锁',...SCENES['detention-suspension-airlock']},
  {id:'detention-nonexecution-screen',number:'24',title:'拘留不执行筛网',...SCENES['detention-nonexecution-screen']},
];

export const PenaltyVerdictArenaPlayer = () => <RemotionDeck animationId="penalty-verdict-arena" title="行政处罚" component={PenaltyVerdictArena} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PenaltyVerdictArenaPlayer;
