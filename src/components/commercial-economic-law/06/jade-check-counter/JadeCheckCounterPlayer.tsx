import {JadeCheckCounter} from '@/animations/commercial-economic-law/06/jade-check-counter/remotion/JadeCheckCounter';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/06/jade-check-counter/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'entry-tiers', number: '01', title: '支票记载三层次', ...SCENES.entryTiers},
  {id: 'supplement-forgery', number: '02', title: '补记有效与伪造签章', ...SCENES.supplementForgery},
];

export const JadeCheckCounterPlayer = () => <RemotionDeck animationId="jade-check-counter" component={JadeCheckCounter} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="票据法：支票" />;
export default JadeCheckCounterPlayer;
