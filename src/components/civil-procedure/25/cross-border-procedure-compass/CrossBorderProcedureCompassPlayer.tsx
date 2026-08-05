import {typography} from '@/animations/civil-procedure/25/cross-border-procedure-compass/animation.meta';
import {CrossBorderProcedureCompass} from '@/animations/civil-procedure/25/cross-border-procedure-compass/remotion/CrossBorderProcedureCompass';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/25/cross-border-procedure-compass/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'jurisdiction-agreement-boundary',number:'01',title:'涉外协议管辖的三道中国边界',...SCENES.jurisdictionAgreementBoundary},
  {id:'parallel-litigation-router',number:'02',title:'平行诉讼不是当然排除中国法院',...SCENES.parallelLitigationRouter},
  {id:'service-and-evidence-corridors',number:'03',title:'涉外送达与取证先看住所和协助路径',...SCENES.serviceAndEvidenceCorridors},
  {id:'foreign-judgment-recognition',number:'04',title:'外国裁判承认执行与复议终点',...SCENES.foreignJudgmentRecognition},
];
export default ()=> <RemotionDeck animationId="cross-border-procedure-compass" component={CrossBorderProcedureCompass} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="涉外民诉程序罗盘" typography={typography} typographyScope={{animationId:'cross-border-procedure-compass',subject:'civil-procedure',topic:'25'}}/>;
