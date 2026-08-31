import {OccupationAccessionHall} from '@/animations/civil-law/07/occupation-accession-hall/remotion/OccupationAccessionHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/07/occupation-accession-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'occupation-lane',
    number: '01',
    title: '先占',
    ...SCENES['occupation-lane'],
  },
  {
    id: 'accession-fork',
    number: '02',
    title: '添附的三种情形',
    ...SCENES['accession-fork'],
  },
  {
    id: 'accession-verdicts',
    number: '03',
    title: '添附的双案与衡平',
    ...SCENES['accession-verdicts'],
  },
];

export const OccupationAccessionHallPlayer = () => (
  <RemotionDeck
    animationId="occupation-accession-hall"
    title="先占与添附——淘金盘馆"
    component={OccupationAccessionHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default OccupationAccessionHallPlayer;
