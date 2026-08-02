import {PreSuitPreservationTransfer} from '@/animations/civil-procedure/12/pre-suit-preservation-transfer/remotion/PreSuitPreservationTransfer';
import {typography} from '@/animations/civil-procedure/12/pre-suit-preservation-transfer/animation.meta';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/12/pre-suit-preservation-transfer/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'jurisdiction-triangle', number: '01', title: '诉前保全管辖连接点', ...SCENES.jurisdictionTriangle},
  {id: 'procedure-handoff', number: '02', title: '保全手续移送', ...SCENES.procedureHandoff},
  {id: 'jurisdiction-hold', number: '03', title: '管辖未定时暂停移送', ...SCENES.jurisdictionHold},
];
export default () => <RemotionDeck animationId="pre-suit-preservation-transfer" component={PreSuitPreservationTransfer} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="诉前保全管辖与移送" typography={typography} typographyScope={{animationId: 'pre-suit-preservation-transfer', subject: 'civil-procedure', topic: '12'}} />;
