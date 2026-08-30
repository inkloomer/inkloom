import {RecusalBackstageSwap} from '@/animations/criminal-procedure-gold/05/recusal-backstage-swap/remotion/RecusalBackstageSwap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/05/recusal-backstage-swap/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'applicant-gate', number: '01', title: '谁能申请回避，谁本身不回避', ...SCENES.applicantGate},
  {id: 'reason-reroom', number: '02', title: '理由只看利害，重审必须换角', ...SCENES.reasonReroom},
  {id: 'decision-baton', number: '03', title: '谁拍板，怎么层报，谁能复议', ...SCENES.decisionBaton},
];

export const RecusalBackstageSwapPlayer = () => <RemotionDeck animationId="recusal-backstage-swap" component={RecusalBackstageSwap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑事回避——四张申请牌、利害标尺与决定权接力" />;
export default RecusalBackstageSwapPlayer;
