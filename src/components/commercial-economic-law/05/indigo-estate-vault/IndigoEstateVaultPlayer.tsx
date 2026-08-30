import {IndigoEstateVault} from '@/animations/commercial-economic-law/05/indigo-estate-vault/remotion/IndigoEstateVault';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/05/indigo-estate-vault/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'four-fork', number: '01', title: '受理后的四岔路口：谁能动、谁不能动', ...SCENES.fourFork},
  {id: 'worker-claims', number: '02', title: '职工债权：无需申报的三连错', ...SCENES.workerClaims},
  {id: 'transit-gate', number: '03', title: '特殊取回权：路上＋未付清双要件', ...SCENES.transitGate},
  {id: 'clawback', number: '04', title: '追回双刃：董事奖金与抽逃出资', ...SCENES.clawback},
];

export const IndigoEstateVaultPlayer = () => <RemotionDeck animationId="indigo-estate-vault" component={IndigoEstateVault} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="破产法：债务人财产" />;
export default IndigoEstateVaultPlayer;
