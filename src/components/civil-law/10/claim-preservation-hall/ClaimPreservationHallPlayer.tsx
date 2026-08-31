import {ClaimPreservationHall} from '@/animations/civil-law/10/claim-preservation-hall/remotion/ClaimPreservationHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/10/claim-preservation-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'subrogation-gate',
    number: '01',
    title: '代位权',
    ...SCENES['subrogation-gate'],
  },
  {
    id: 'revocation-conditions',
    number: '02',
    title: '撤销权的成立条件',
    ...SCENES['revocation-conditions'],
  },
  {
    id: 'revocation-exercise-ladder',
    number: '03',
    title: '撤销权的行使与双权对照',
    ...SCENES['revocation-exercise-ladder'],
  },
];

export const ClaimPreservationHallPlayer = () => (
  <RemotionDeck
    animationId="claim-preservation-hall"
    title="债的保全——暗樱盾库"
    component={ClaimPreservationHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ClaimPreservationHallPlayer;
