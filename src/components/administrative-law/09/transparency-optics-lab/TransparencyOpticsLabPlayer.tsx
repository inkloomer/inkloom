import {TransparencyOpticsLab} from '@/animations/administrative-law/09/transparency-optics-lab/remotion/TransparencyOpticsLab';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/administrative-law/09/transparency-optics-lab/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id:'setting-spectrum',number:'01',title:'设定权光谱',...SCENES['setting-spectrum']},
  {id:'rulemaking-chronology',number:'02',title:'规章权限衰减',...SCENES['rulemaking-chronology']},
  {id:'setting-trap-lenses',number:'03',title:'设定陷阱透镜',...SCENES['setting-trap-lenses']},
  {id:'authorization-prism',number:'04',title:'授权棱镜',...SCENES['authorization-prism']},
  {id:'delegation-filters',number:'05',title:'委托滤镜',...SCENES['delegation-filters']},
  {id:'concentration-apertures',number:'06',title:'集中实施光圈',...SCENES['concentration-apertures']},
  {id:'subject-trap-darkroom',number:'07',title:'主体陷阱暗房',...SCENES['subject-trap-darkroom']},
  {id:'hearing-signal-split',number:'08',title:'听证信号分流',...SCENES['hearing-signal-split']},
  {id:'penalty-hearing-waveband',number:'09',title:'处罚听证波段',...SCENES['penalty-hearing-waveband']},
  {id:'license-hearing-focus',number:'10',title:'许可听证双焦点',...SCENES['license-hearing-focus']},
  {id:'hearing-clock-array',number:'11',title:'听证时钟阵列',...SCENES['hearing-clock-array']},
  {id:'hearing-common-console',number:'12',title:'听证共同控制台',...SCENES['hearing-common-console']},
  {id:'hearing-trap-scope',number:'13',title:'听证误区扫描',...SCENES['hearing-trap-scope']},
  {id:'information-definition-projector',number:'14',title:'政府信息投影',...SCENES['information-definition-projector']},
  {id:'disclosure-source-routing',number:'15',title:'公开主体路由',...SCENES['disclosure-source-routing']},
  {id:'absolute-secrecy-shutter',number:'16',title:'绝对遮光阀',...SCENES['absolute-secrecy-shutter']},
  {id:'privacy-balance-filter',number:'17',title:'隐私平衡滤镜',...SCENES['privacy-balance-filter']},
  {id:'optional-nondisclosure-dimmers',number:'18',title:'可不公开调光器',...SCENES['optional-nondisclosure-dimmers']},
  {id:'active-disclosure-beam',number:'19',title:'主动公开光束',...SCENES['active-disclosure-beam']},
  {id:'active-disclosure-exposure',number:'20',title:'主动公开曝光',...SCENES['active-disclosure-exposure']},
  {id:'application-input-specimen',number:'21',title:'申请输入标本',...SCENES['application-input-specimen']},
  {id:'receipt-clock-detectors',number:'22',title:'收到日探测器',...SCENES['receipt-clock-detectors']},
  {id:'response-spectrum-splitter',number:'23',title:'答复分光器',...SCENES['response-spectrum-splitter']},
  {id:'supplement-correction-gate',number:'24',title:'材料补正闸',...SCENES['supplement-correction-gate']},
  {id:'special-request-router',number:'25',title:'特殊申请路由器',...SCENES['special-request-router']},
  {id:'abuse-throttle-remedy',number:'26',title:'滥用申请节流',...SCENES['abuse-throttle-remedy']},
];

export const TransparencyOpticsLabPlayer = () => <RemotionDeck animationId="transparency-optics-lab" title="三法对比与政府信息公开" component={TransparencyOpticsLab} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default TransparencyOpticsLabPlayer;
