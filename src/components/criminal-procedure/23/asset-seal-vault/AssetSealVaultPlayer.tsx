import {
  AssetSealVault,
} from '@/animations/criminal-procedure/23/asset-seal-vault/remotion/AssetSealVault';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/23/asset-seal-vault/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'entry-conditions-fork',
    number: '01',
    title: '适用条件',
    ...SCENES['entry-conditions-fork'],
  },
  {
    id: 'application-notice-lane',
    number: '02',
    title: '申请、管辖与公告',
    ...SCENES['application-notice-lane'],
  },
  {
    id: 'trial-verdict-outcome',
    number: '03',
    title: '审理、裁定与救济',
    ...SCENES['trial-verdict-outcome'],
  },
];

export const AssetSealVaultPlayer = () => (
  <RemotionDeck
    animationId="asset-seal-vault"
    title="违法所得没收程序：逃匿死亡两道门、申请公告链与裁定救济"
    component={AssetSealVault}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default AssetSealVaultPlayer;
