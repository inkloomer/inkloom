import {PreservationRemedySwitchboard} from '@/animations/civil-procedure/12/preservation-remedy-switchboard/remotion/PreservationRemedySwitchboard';
import {typography} from '@/animations/civil-procedure/12/preservation-remedy-switchboard/animation.meta';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/12/preservation-remedy-switchboard/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'reconsideration', number: '01', title: '复议不停止执行', ...SCENES.reconsideration},
  {id: 'mandatory-release', number: '02', title: '应当解除的情形', ...SCENES.mandatoryRelease},
  {id: 'security-substitution', number: '03', title: '等值担保变更标的', ...SCENES.securitySubstitution},
];
export default () => <RemotionDeck animationId="preservation-remedy-switchboard" component={PreservationRemedySwitchboard} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="保全救济解除与变更" typography={typography} typographyScope={{animationId: 'preservation-remedy-switchboard', subject: 'civil-procedure', topic: '12'}} />;
