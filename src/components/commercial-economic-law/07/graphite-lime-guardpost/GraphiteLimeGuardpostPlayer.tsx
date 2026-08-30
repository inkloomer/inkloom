import {GraphiteLimeGuardpost} from '@/animations/commercial-economic-law/07/graphite-lime-guardpost/remotion/GraphiteLimeGuardpost';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/07/graphite-lime-guardpost/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'trustee-sue', number: '01', title: '债券受托管理人与募集资金', ...SCENES.trusteeSue},
  {id: 'suitability', number: '02', title: '卖者尽责 · 买者自负', ...SCENES.suitability},
];

export const GraphiteLimeGuardpostPlayer = () => <RemotionDeck animationId="graphite-lime-guardpost" component={GraphiteLimeGuardpost} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="证券法：投资者保护" />;
export default GraphiteLimeGuardpostPlayer;
