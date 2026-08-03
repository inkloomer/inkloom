import {PreservationStageMap} from '@/animations/civil-procedure/12/preservation-stage-map/remotion/PreservationStageMap';
import {typography} from '@/animations/civil-procedure/12/preservation-stage-map/animation.meta';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/12/preservation-stage-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'stage-position', number: '01', title: '三阶段程序位置', ...SCENES.stagePosition},
  {id: 'security-slope', number: '02', title: '担保强度递减', ...SCENES.securitySlope},
  {id: 'deadline-dials', number: '03', title: '关键期限与解除', ...SCENES.deadlineDials},
  {id: 'authority-split', number: '04', title: '启动主体与二审例外', ...SCENES.authoritySplit},
  {id: 'ruling-deadlines', number: '05', title: '诉中裁定期限', ...SCENES.rulingDeadlines},
];
export default () => <RemotionDeck animationId="preservation-stage-map" component={PreservationStageMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="保全阶段与裁定规则" typography={typography} typographyScope={{animationId: 'preservation-stage-map', subject: 'civil-procedure', topic: '12'}} />;
