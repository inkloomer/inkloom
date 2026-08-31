import {AdoptionDossierRegistry} from '@/animations/civil-law/21/adoption-dossier-registry/remotion/AdoptionDossierRegistry';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/21/adoption-dossier-registry/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'condition-triptych',
    number: '01',
    title: '收养的条件',
    ...SCENES['condition-triptych'],
  },
  {
    id: 'formation-consent-gate',
    number: '02',
    title: '收养的成立',
    ...SCENES['formation-consent-gate'],
  },
  {
    id: 'termination-fork',
    number: '03',
    title: '收养的解除',
    ...SCENES['termination-fork'],
  },
];

export const AdoptionDossierRegistryPlayer = () => (
  <RemotionDeck
    animationId="adoption-dossier-registry"
    title="收养法——茶青卷宗房"
    component={AdoptionDossierRegistry}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default AdoptionDossierRegistryPlayer;
