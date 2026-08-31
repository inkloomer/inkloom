import {ObligationExtinctionHall} from '@/animations/civil-law/10/obligation-extinction-hall/remotion/ObligationExtinctionHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/10/obligation-extinction-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'offset-fulfilment-ladder',
    number: '01',
    title: '履行的抵充与以物抵债',
    ...SCENES['offset-fulfilment-ladder'],
  },
  {
    id: 'deposit-tally',
    number: '02',
    title: '提存',
    ...SCENES['deposit-tally'],
  },
  {
    id: 'offset-pair',
    number: '03',
    title: '抵销',
    ...SCENES['offset-pair'],
  },
  {
    id: 'confusion-waiver-fork',
    number: '04',
    title: '混同与免除',
    ...SCENES['confusion-waiver-fork'],
  },
];

export const ObligationExtinctionHallPlayer = () => (
  <RemotionDeck
    animationId="obligation-extinction-hall"
    title="债的消灭——烬火烛台馆"
    component={ObligationExtinctionHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ObligationExtinctionHallPlayer;
