import {PeopleAssessors} from '@/animations/theoretical-law/04/people-assessors/remotion/PeopleAssessors';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/people-assessors/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'quota', number: '01', title: '资格与名额', ...SCENES.quota},
  {id: 'bench', number: '02', title: '参审案件与合议庭', ...SCENES.bench},
  {id: 'duty-safety', number: '03', title: '免职与履职保障', ...SCENES.dutySafety},
];

export const PeopleAssessorsPlayer = () => (
  <RemotionDeck
    animationId="people-assessors"
    component={PeopleAssessors}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="人民陪审员"
  />
);

export default PeopleAssessorsPlayer;
