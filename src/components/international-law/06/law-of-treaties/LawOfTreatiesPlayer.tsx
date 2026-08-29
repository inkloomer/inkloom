import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {LawOfTreaties} from '@/animations/international-law/06/law-of-treaties/remotion/LawOfTreaties';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/06/law-of-treaties/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'conclusion-elements', number: '01', title: '条约成立的实质要件', ...SCENES.conclusionElements},
  {id: 'conclusion-procedure', number: '02', title: '缔约程序：谁决定谁来签', ...SCENES.conclusionProcedure},
  {id: 'registration-reservation', number: '03', title: '登记与条约的保留', ...SCENES.registrationReservation},
  {id: 'treaty-effect', number: '04', title: '条约的效力', ...SCENES.treatyEffect},
  {id: 'interpretation', number: '05', title: '条约的解释', ...SCENES.interpretation},
  {id: 'conflict-amendment', number: '06', title: '冲突与多边条约的修正', ...SCENES.conflictAmendment},
];

export const LawOfTreatiesPlayer = () => (
  <RemotionDeck
    animationId="law-of-treaties"
    title="条约法"
    component={LawOfTreaties}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default LawOfTreatiesPlayer;
