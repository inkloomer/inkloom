import {BehaviorPreservation} from '@/animations/civil-procedure/12/behavior-preservation/remotion/BehaviorPreservation';
import {typography} from '@/animations/civil-procedure/12/behavior-preservation/animation.meta';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/12/behavior-preservation/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'content-distinction', number: '01', title: '财产与行为保全的对象', ...SCENES.contentDistinction},
  {id: 'protective-orders', number: '02', title: '人身安全令与人格权禁令', ...SCENES.protectiveOrders},
  {id: 'same-court-review', number: '03', title: '同级复议与继续执行', ...SCENES.sameCourtReview},
];

export default () => <RemotionDeck animationId="behavior-preservation" component={BehaviorPreservation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="行为保全与禁令" typography={typography} typographyScope={{animationId: 'behavior-preservation', subject: 'civil-procedure', topic: '12'}} />;
