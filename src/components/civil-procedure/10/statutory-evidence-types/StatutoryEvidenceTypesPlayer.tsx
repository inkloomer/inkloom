import {StatutoryEvidenceTypes} from '@/animations/civil-procedure/10/statutory-evidence-types/remotion/StatutoryEvidenceTypes';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/10/statutory-evidence-types/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'proof-method', number: '01', title: '先看证明方式', ...SCENES.proofMethod},
  {id: 'medium-boundary', number: '02', title: '声音图像的介质边界', ...SCENES.mediumBoundary},
  {id: 'rule-carryover', number: '03', title: '书证规则的适用范围', ...SCENES.ruleCarryover},
];
export default () => <RemotionDeck animationId="statutory-evidence-types" component={StatutoryEvidenceTypes} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="四类法定证据的区分" />;
