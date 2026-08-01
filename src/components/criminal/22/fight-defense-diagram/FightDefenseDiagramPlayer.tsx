import {FightDefenseDiagram} from '@/animations/criminal/22/fight-defense-diagram/remotion/FightDefenseDiagram';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/22/fight-defense-diagram/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'mutual-intent', number: '01', title: '双方均有侵害意图', ...SCENES.mutualIntent},
  {id: 'one-sided-attack', number: '02', title: '单方侵害的定性分流', ...SCENES.oneSidedAttack},
  {id: 'headcount-reversal', number: '03', title: '人数反转不改变防卫性质', ...SCENES.headcountReversal},
];

export default () => <RemotionDeck animationId="fight-defense-diagram" component={FightDefenseDiagram} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="斗殴、伤害与防卫" />;
