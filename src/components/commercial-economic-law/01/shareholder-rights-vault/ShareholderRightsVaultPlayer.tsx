import {ShareholderRightsVault} from '@/animations/commercial-economic-law/01/shareholder-rights-vault/remotion/ShareholderRightsVault';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/shareholder-rights-vault/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'inspection', number: '01', title: '知情权：直读、三步看、一道目的闸', ...SCENES.inspection},
  {id: 'validity-funnel', number: '02', title: '决议效力：一具排他漏斗', ...SCENES.validityFunnel},
  {id: 'claim-desk', number: '03', title: '两席权符：异议回购与代表诉讼', ...SCENES.claimDesk},
];

export const ShareholderRightsVaultPlayer = () => <RemotionDeck animationId="shareholder-rights-vault" component={ShareholderRightsVault} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="股东权利：读账三闸、决议漏斗与两席权符" />;
export default ShareholderRightsVaultPlayer;
