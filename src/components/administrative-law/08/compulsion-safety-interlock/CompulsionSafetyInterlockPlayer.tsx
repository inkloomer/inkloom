import {CompulsionSafetyInterlock} from '@/animations/administrative-law/08/compulsion-safety-interlock/remotion/CompulsionSafetyInterlock';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/administrative-law/08/compulsion-safety-interlock/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id:'measure-execution-split',number:'01',title:'措施与执行分舱',...SCENES['measure-execution-split']},
  {id:'three-independent-acts',number:'02',title:'三个独立行为',...SCENES['three-independent-acts']},
  {id:'compulsion-tool-spectrum',number:'03',title:'强制工具谱',...SCENES['compulsion-tool-spectrum']},
  {id:'setting-authority-layers',number:'04',title:'设定权层板',...SCENES['setting-authority-layers']},
  {id:'implementation-subject-circuit',number:'05',title:'实施主体电路',...SCENES['implementation-subject-circuit']},
  {id:'general-measure-checkpoints',number:'06',title:'一般程序六联锁',...SCENES['general-measure-checkpoints']},
  {id:'emergency-reporting-fork',number:'07',title:'紧急报告分叉',...SCENES['emergency-reporting-fork']},
  {id:'seal-seizure-object-filter',number:'08',title:'查扣对象筛网',...SCENES['seal-seizure-object-filter']},
  {id:'seal-seizure-control-panel',number:'09',title:'查扣控制盘',...SCENES['seal-seizure-control-panel']},
  {id:'seal-seizure-disposition-tree',number:'10',title:'查扣处置树',...SCENES['seal-seizure-disposition-tree']},
  {id:'bank-freeze-protocol',number:'11',title:'冻结协议阀',...SCENES['bank-freeze-protocol']},
  {id:'execution-power-grid',number:'12',title:'执行权电网',...SCENES['execution-power-grid']},
  {id:'auction-unlock-conditions',number:'13',title:'拍卖解锁器',...SCENES['auction-unlock-conditions']},
  {id:'self-execution-sequence',number:'14',title:'自行执行序列',...SCENES['self-execution-sequence']},
  {id:'execution-safety-interlocks',number:'15',title:'执行比例联锁',...SCENES['execution-safety-interlocks']},
  {id:'money-obligation-escalator',number:'16',title:'金钱义务升级器',...SCENES['money-obligation-escalator']},
  {id:'substitute-performance-gates',number:'17',title:'代履行准入门',...SCENES['substitute-performance-gates']},
  {id:'substitute-performance-sequence',number:'18',title:'代履行作业序列',...SCENES['substitute-performance-sequence']},
  {id:'execution-remedy-separation',number:'19',title:'执行救济分离器',...SCENES['execution-remedy-separation']},
  {id:'court-application-window',number:'20',title:'法院申请窗口',...SCENES['court-application-window']},
  {id:'court-review-chambers',number:'21',title:'法院审查舱',...SCENES['court-review-chambers']},
];

export const CompulsionSafetyInterlockPlayer = () => <RemotionDeck animationId="compulsion-safety-interlock" title="行政强制" component={CompulsionSafetyInterlock} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default CompulsionSafetyInterlockPlayer;
