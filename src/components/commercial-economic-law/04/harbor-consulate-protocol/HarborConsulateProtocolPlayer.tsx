import {HarborConsulateProtocol} from '@/animations/commercial-economic-law/04/harbor-consulate-protocol/remotion/HarborConsulateProtocol';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/04/harbor-consulate-protocol/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'requisition', number: '01', title: '征用不是征收：方舱改仓库案', ...SCENES.requisition},
  {id: 'negative-list', number: '02', title: '负面清单之外：国民待遇＋备案制', ...SCENES.negativeList},
  {id: 'retroactive', number: '03', title: '溯及力与全题收束', ...SCENES.retroactive},
];

export const HarborConsulateProtocolPlayer = () => <RemotionDeck animationId="harbor-consulate-protocol" component={HarborConsulateProtocol} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="外商投资法：征用补偿与负面清单" />;
export default HarborConsulateProtocolPlayer;
