import {ConceptOfLawDispute} from '@/animations/theoretical-law/01/concept-of-law-dispute/remotion/ConceptOfLawDispute';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/concept-of-law-dispute/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'dispute-premise', number: '01', title: '争议前提与两个限定', ...SCENES.disputePremise},
  {id: 'positivist-camp', number: '02', title: '实证主义：不承认', ...SCENES.positivistCamp},
  {id: 'non-positivist-camp', number: '03', title: '非实证主义：承认', ...SCENES.nonPositivistCamp},
  {id: 'elements-evil-law', number: '04', title: '三要素与恶法之争', ...SCENES.elementsEvilLaw},
];

export const ConceptOfLawDisputePlayer = () => (
  <RemotionDeck
    animationId="concept-of-law-dispute"
    component={ConceptOfLawDispute}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法概念的争议：一个前提、两大阵营与三要素"
  />
);

export default ConceptOfLawDisputePlayer;
