import {ConstitutionPrinciples} from '@/animations/theoretical-law/01/constitution-principles/remotion/ConstitutionPrinciples';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/constitution-principles/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'five-principles', number: '01', title: '五大原则总览', ...SCENES.fivePrinciples},
  {id: 'rights-law', number: '02', title: '人权与法治', ...SCENES.rightsLaw},
  {id: 'checks-stance', number: '03', title: '权力制约与我国立场', ...SCENES.checksStance},
];

export const ConstitutionPrinciplesPlayer = () => (
  <RemotionDeck
    animationId="constitution-principles"
    component={ConstitutionPrinciples}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="宪法的基本原则：五大原则"
  />
);

export default ConstitutionPrinciplesPlayer;
