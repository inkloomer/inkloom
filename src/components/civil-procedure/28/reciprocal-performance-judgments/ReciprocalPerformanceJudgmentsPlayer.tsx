import {typography} from '@/animations/civil-procedure/28/reciprocal-performance-judgments/animation.meta';
import {ReciprocalPerformanceJudgments} from '@/animations/civil-procedure/28/reciprocal-performance-judgments/remotion/ReciprocalPerformanceJudgments';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/28/reciprocal-performance-judgments/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'defense-without-counterclaim',number:'01',title:'同时履行抗辩成立但未反诉',...SCENES.defenseWithoutCounterclaim},
  {id:'counterclaim-changes-judgment',number:'02',title:'反诉把双方义务都写入判决主文',...SCENES.counterclaimChangesJudgment},
  {id:'prior-performance-defense',number:'03',title:'先履行抗辩成立后的驳回与再诉',...SCENES.priorPerformanceDefense},
];
export default ()=> <RemotionDeck animationId="reciprocal-performance-judgments" component={ReciprocalPerformanceJudgments} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="履行抗辩与判决主文" typography={typography} typographyScope={{animationId:'reciprocal-performance-judgments',subject:'civil-procedure',topic:'28'}}/>;
