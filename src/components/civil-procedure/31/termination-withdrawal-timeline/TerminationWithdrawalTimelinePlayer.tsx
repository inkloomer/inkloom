import {typography} from '@/animations/civil-procedure/31/termination-withdrawal-timeline/animation.meta';
import {TerminationWithdrawalTimeline} from '@/animations/civil-procedure/31/termination-withdrawal-timeline/remotion/TerminationWithdrawalTimeline';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/31/termination-withdrawal-timeline/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'first-action-withdrawal',number:'01',title:'首次起诉后撤诉：解除效力不保留',...SCENES.firstActionWithdrawal},
  {id:'second-action-service',number:'02',title:'再次起诉被支持：以第二次送达定解除时间',...SCENES.secondActionService},
  {id:'notice-arrival-exception',number:'03',title:'撤诉后另行通知到达：改写解除时点',...SCENES.noticeArrivalException},
];
export default ()=> <RemotionDeck animationId="termination-withdrawal-timeline" component={TerminationWithdrawalTimeline} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="解除合同撤诉时间线" typography={typography} typographyScope={{animationId:'termination-withdrawal-timeline',subject:'civil-procedure',topic:'31'}}/>;
