import {BurdenOfProofCaveats} from '@/animations/civil-procedure/09/burden-of-proof-caveats/remotion/BurdenOfProofCaveats';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/09/burden-of-proof-caveats/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'caveats-board', number: '01', title: '真伪不明才启动风险', ...SCENES.caveatsBoard},
  {id: 'court-outsider-gate', number: '02', title: '主体与单一事实', ...SCENES.courtOutsiderGate},
  {id: 'fixed-counterproof', number: '03', title: '不转移，但可以反证', ...SCENES.fixedCounterproof},
  {id: 'fiction-verdict', number: '04', title: '拟制不等于客观事实', ...SCENES.fictionVerdict},
];

export const BurdenOfProofCaveatsPlayer = () => <RemotionDeck animationId="burden-of-proof-caveats" component={BurdenOfProofCaveats} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="理解证明责任的六个注意点" />;

export default BurdenOfProofCaveatsPlayer;
