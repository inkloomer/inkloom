import {typography} from '@/animations/civil-procedure/26/arbitration-validity-route/animation.meta';
import {ArbitrationValidityRoute} from '@/animations/civil-procedure/26/arbitration-validity-route/remotion/ArbitrationValidityRoute';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/26/arbitration-validity-route/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'arbitrable-scope',number:'01',title:'哪些纠纷能进入仲裁',...SCENES.arbitrableScope},
  {id:'agreement-validity',number:'02',title:'仲裁协议有效要件与独立性',...SCENES.agreementValidity},
  {id:'choice-and-multiple-institutions',number:'03',title:'“或裁或审”与多机构约定',...SCENES.choiceAndMultipleInstitutions},
  {id:'timing-and-authority',number:'04',title:'首次开庭前异议与确认效力机关',...SCENES.timingAndAuthority},
  {id:'relativity-and-review',number:'05',title:'仲裁协议相对性与裁决司法审查',...SCENES.relativityAndReview},
];
export default ()=> <RemotionDeck animationId="arbitration-validity-route" component={ArbitrationValidityRoute} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="仲裁协议效力与司法审查路径" typography={typography} typographyScope={{animationId:'arbitration-validity-route',subject:'civil-procedure',topic:'26'}}/>;
