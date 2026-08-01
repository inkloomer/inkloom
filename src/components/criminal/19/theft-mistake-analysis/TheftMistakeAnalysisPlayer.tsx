import {TheftMistakeAnalysis} from '@/animations/criminal/19/theft-mistake-analysis/remotion/TheftMistakeAnalysis';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/19/theft-mistake-analysis/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'awareness-alignment', number: '01', title: '定罪的主客观对准', ...SCENES.awarenessAlignment},
  {id: 'penalty-tier', number: '02', title: '法定刑升格认识', ...SCENES.penaltyTier},
  {id: 'attempt-risk', number: '03', title: '数额未达与犯罪未遂', ...SCENES.attemptRisk},
  {id: 'aggravated-attempt', number: '04', title: '数额巨大未遂与既遂竞合', ...SCENES.aggravatedAttempt},
];

export const TheftMistakeAnalysisPlayer = () => <RemotionDeck animationId="theft-mistake-analysis" component={TheftMistakeAnalysis} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="盗窃数额认识错误" />;
export default TheftMistakeAnalysisPlayer;
