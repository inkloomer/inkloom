import {PartnershipContributionManifest} from '@/animations/commercial-economic-law/02/partnership-contribution-manifest/remotion/PartnershipContributionManifest';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/02/partnership-contribution-manifest/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'freedom-desk', number: '01', title: '礼单不拘形式：出资与偿债两层皮', ...SCENES.freedomDesk},
  {id: 'arrears-desk', number: '02', title: '欠缴两本账：普人宽、限人严', ...SCENES.arrearsDesk},
  {id: 'conversion', number: '03', title: '换马不卸鞍：身份转换前后都连带', ...SCENES.conversion},
];

export const PartnershipContributionManifestPlayer = () => <RemotionDeck animationId="partnership-contribution-manifest" component={PartnershipContributionManifest} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="合伙出资：礼单不拘形式，偿债人在门外" />;
export default PartnershipContributionManifestPlayer;
