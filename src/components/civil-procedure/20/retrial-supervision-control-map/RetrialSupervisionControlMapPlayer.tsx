import {typography} from '@/animations/civil-procedure/20/retrial-supervision-control-map/animation.meta';
import {RetrialSupervisionControlMap} from '@/animations/civil-procedure/20/retrial-supervision-control-map/remotion/RetrialSupervisionControlMap';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/20/retrial-supervision-control-map/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'retrial-scope-and-triggers',number:'01',title:'再审对象与三类启动主体',...SCENES.retrialScopeAndTriggers},
  {id:'thirteen-statutory-grounds',number:'02',title:'13 项再审事由的四组检索',...SCENES.thirteenStatutoryGrounds},
  {id:'six-month-application-clock',number:'03',title:'6 个月申请时钟与四例外',...SCENES.sixMonthApplicationClock},
  {id:'execution-state-switch',number:'04',title:'申请、裁定再审与执行状态切换',...SCENES.executionStateSwitch},
  {id:'three-month-review-gate',number:'05',title:'3 个月再审审查只看事由',...SCENES.threeMonthReviewGate},
  {id:'retrial-hearing-and-exits',number:'06',title:'再审审理范围与退出效果',...SCENES.retrialHearingAndExits},
];
export default ()=> <RemotionDeck animationId="retrial-supervision-control-map" component={RetrialSupervisionControlMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="审判监督程序控制图" typography={typography} typographyScope={{animationId:'retrial-supervision-control-map',subject:'civil-procedure',topic:'20'}}/>;
