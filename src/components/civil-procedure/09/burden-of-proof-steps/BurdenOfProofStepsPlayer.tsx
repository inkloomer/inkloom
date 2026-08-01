import {BurdenOfProofSteps} from '@/animations/civil-procedure/09/burden-of-proof-steps/remotion/BurdenOfProofSteps';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/09/burden-of-proof-steps/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'burden-risk', number: '01', title: '真伪不明的风险', ...SCENES.burdenRisk},
  {id: 'affirmative-burden', number: '02', title: '积极事实谁举证', ...SCENES.affirmativeBurden},
  {id: 'two-inversions', number: '03', title: '两类倒置', ...SCENES.twoInversions},
  {id: 'three-steps', number: '04', title: '三步走', ...SCENES.threeSteps},
];

export const BurdenOfProofStepsPlayer = () => <RemotionDeck animationId="burden-of-proof-steps" component={BurdenOfProofSteps} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="证明责任分配的判断" />;

export default BurdenOfProofStepsPlayer;
