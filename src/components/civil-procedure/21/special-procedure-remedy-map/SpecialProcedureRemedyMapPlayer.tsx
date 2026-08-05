import {typography} from '@/animations/civil-procedure/21/special-procedure-remedy-map/animation.meta';
import {SpecialProcedureRemedyMap} from '@/animations/civil-procedure/21/special-procedure-remedy-map/remotion/SpecialProcedureRemedyMap';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/21/special-procedure-remedy-map/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'non-contentious-boundary',number:'01',title:'特别程序：非讼边界与错误纠正',...SCENES.nonContentiousBoundary},
  {id:'custodian-and-estate-manager',number:'02',title:'代管人变更与遗产管理人指定',...SCENES.custodianAndEstateManager},
  {id:'mediation-confirmation',number:'03',title:'司法确认调解协议的入口与异议',...SCENES.mediationConfirmation},
  {id:'security-interest-realization',number:'04',title:'实现担保物权：准许执行或转实体争议',...SCENES.securityInterestRealization},
];
export default ()=> <RemotionDeck animationId="special-procedure-remedy-map" component={SpecialProcedureRemedyMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="特别程序与异议救济图" typography={typography} typographyScope={{animationId:'special-procedure-remedy-map',subject:'civil-procedure',topic:'21'}}/>;
