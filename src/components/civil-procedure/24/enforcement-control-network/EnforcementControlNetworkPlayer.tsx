import {typography} from '@/animations/civil-procedure/24/enforcement-control-network/animation.meta';
import {EnforcementControlNetwork} from '@/animations/civil-procedure/24/enforcement-control-network/remotion/EnforcementControlNetwork';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/24/enforcement-control-network/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'enforcement-launch-clock',number:'01',title:'生效文书与 2 年申请执行时效',...SCENES.enforcementLaunchClock},
  {id:'statutory-jurisdiction',number:'02',title:'法定执行管辖与 10 日异议',...SCENES.statutoryJurisdiction},
  {id:'security-and-settlement',number:'03',title:'执行担保与执行和解不能混用',...SCENES.securityAndSettlement},
  {id:'objections-and-actions',number:'04',title:'执行行为异议、案外人异议与异议之诉',...SCENES.objectionsAndActions},
  {id:'special-enforcement-measures',number:'05',title:'特殊执行措施的对象与边界',...SCENES.specialEnforcementMeasures},
];
export default ()=> <RemotionDeck animationId="enforcement-control-network" component={EnforcementControlNetwork} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="执行程序控制网络" typography={typography} typographyScope={{animationId:'enforcement-control-network',subject:'civil-procedure',topic:'24'}}/>;
