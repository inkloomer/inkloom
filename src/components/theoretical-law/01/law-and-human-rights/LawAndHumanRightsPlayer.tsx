import {LawAndHumanRights} from '@/animations/theoretical-law/01/law-and-human-rights/remotion/LawAndHumanRights';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/law-and-human-rights/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept-history', number: '01', title: '人权的概念', ...SCENES.conceptHistory},
  {id: 'nature-priority', number: '02', title: '先于国家与法', ...SCENES.naturePriority},
  {id: 'legalization-duality', number: '03', title: '法律化与价值并列', ...SCENES.legalizationDuality},
];

export const LawAndHumanRightsPlayer = () => (
  <RemotionDeck
    animationId="law-and-human-rights"
    component={LawAndHumanRights}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法与人权：先于国家的权利"
  />
);

export default LawAndHumanRightsPlayer;
