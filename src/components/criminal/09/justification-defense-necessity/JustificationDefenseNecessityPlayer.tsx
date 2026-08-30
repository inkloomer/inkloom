import {JustificationDefenseNecessity} from '@/animations/criminal/09/justification-defense-necessity/remotion/JustificationDefenseNecessity';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/09/justification-defense-necessity/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'defense-gate-checklist', number: '01', title: '正当防卫·五道界桩', ...SCENES.defenseGateChecklist},
  {id: 'timing-intent-cases', number: '02', title: '时间与意思·偶然防卫', ...SCENES.timingIntentCases},
  {id: 'defense-limits-special', number: '03', title: '限度·特殊防卫·追小偷', ...SCENES.defenseLimitsSpecial},
  {id: 'necessity-escape-side', number: '04', title: '紧急避险·退一步的正当化', ...SCENES.necessityEscapeSide},
  {id: 'matrix-consent-row', number: '05', title: '反击矩阵·被害人承诺', ...SCENES.matrixConsentRow},
];

export const JustificationDefenseNecessityPlayer = () => <RemotionDeck animationId="justification-defense-necessity" component={JustificationDefenseNecessity} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="排除违法事由：正当防卫·紧急避险·被害人承诺" />;
export default JustificationDefenseNecessityPlayer;
