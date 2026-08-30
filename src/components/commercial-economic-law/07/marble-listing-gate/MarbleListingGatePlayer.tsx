import {MarbleListingGate} from '@/animations/commercial-economic-law/07/marble-listing-gate/remotion/MarbleListingGate';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/07/marble-listing-gate/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'delisting-decision', number: '01', title: '终止上市由交易所决定', ...SCENES.delistingDecision},
  {id: 'review-remedy', number: '02', title: '不服终止上市：复核救济', ...SCENES.reviewRemedy},
];

export const MarbleListingGatePlayer = () => <RemotionDeck animationId="marble-listing-gate" component={MarbleListingGate} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="证券法：证券上市" />;
export default MarbleListingGatePlayer;
