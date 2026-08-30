import {ShareSlipTransitVault} from '@/animations/commercial-economic-law/02/share-slip-transit-vault/remotion/ShareSlipTransitVault';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/02/share-slip-transit-vault/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'two-slips', number: '01', title: '两种玉牌：份额与财产份额', ...SCENES.twoSlips},
  {id: 'limited-tracks', number: '02', title: '有限份额三轨道：内转、外转、出质', ...SCENES.limitedTracks},
  {id: 'general-tracks', number: '03', title: '普通份额两轨道与执行优先线', ...SCENES.generalTracks},
];

export const ShareSlipTransitVaultPlayer = () => <RemotionDeck animationId="share-slip-transit-vault" component={ShareSlipTransitVault} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="份额流转：两种玉牌与三条轨道" />;
export default ShareSlipTransitVaultPlayer;
