import {BurdenOfProofCaveats} from '@/animations/civil-procedure/09/burden-of-proof-caveats/remotion/BurdenOfProofCaveats';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/09/burden-of-proof-caveats/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'caveats-board', number: '01', title: '六个注意点', ...SCENES.caveatsBoard},
  {id: 'fiction-verdict', number: '02', title: '拟制：李四案', ...SCENES.fictionVerdict},
  {id: 'court-outsider-gate', number: '03', title: '法院不是证明责任主体', ...SCENES.courtOutsiderGate},
];

export const BurdenOfProofCaveatsPlayer = () => <RemotionDeck animationId="burden-of-proof-caveats" component={BurdenOfProofCaveats} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="理解证明责任的六个注意点" />;

export default BurdenOfProofCaveatsPlayer;
