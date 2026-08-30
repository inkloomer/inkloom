import {CausationAttributionFlow} from '@/animations/criminal/07/causation-attribution-flow/remotion/CausationAttributionFlow';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/07/causation-attribution-flow/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'cause-gate-three-uses', number: '01', title: '因果的用处·「因」的关卡', ...SCENES.causeGateThreeUses},
  {id: 'effect-gate-three-checks', number: '02', title: '「果」的关卡·现实·规范·管辖', ...SCENES.effectGateThreeChecks},
  {id: 'intervener-two-step', number: '03', title: '介入因素·两步走标准', ...SCENES.intervenerTwoStep},
  {id: 'intervener-case-rows', number: '04', title: '介入因素·三类案例板', ...SCENES.intervenerCaseRows},
  {id: 'unascertainable-fog', number: '05', title: '无法查明·雾区推演', ...SCENES.unascertainableFog},
];

export const CausationAttributionFlowPlayer = () => <RemotionDeck animationId="causation-attribution-flow" component={CausationAttributionFlow} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="因果关系：因·果·介入两步走·无法查明" />;
export default CausationAttributionFlowPlayer;
