import {ProcuratorialPrinciples} from '@/animations/theoretical-law/04/procuratorial-principles/remotion/ProcuratorialPrinciples';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/procuratorial-principles/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'three-principles', number: '01', title: '检察制度的基本原则', ...SCENES.threePrinciples},
  {id: 'integration', number: '02', title: '检察一体化', ...SCENES.integration},
];

export const ProcuratorialPrinciplesPlayer = () => (
  <RemotionDeck
    animationId="procuratorial-principles"
    component={ProcuratorialPrinciples}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="检察制度的基本原则"
  />
);

export default ProcuratorialPrinciplesPlayer;
