import {
  AgencyAuthorityHall,
} from '@/animations/civil-law/04/agency-authority-hall/remotion/AgencyAuthorityHall';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/04/agency-authority-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'agency-power-origin',
    number: '01',
    title: '代理与代理权产生',
    ...SCENES['agency-power-origin'],
  },
  {
    id: 'collusion-agency',
    number: '02',
    title: '恶意串通的代理',
    ...SCENES['collusion-agency'],
  },
  {
    id: 'narrow-unauthorized',
    number: '03',
    title: '狭义无权代理',
    ...SCENES['narrow-unauthorized'],
  },
  {
    id: 'apparent-agency',
    number: '04',
    title: '表见代理',
    ...SCENES['apparent-agency'],
  },
];

export const AgencyAuthorityHallPlayer = () => (
  <RemotionDeck
    animationId="agency-authority-hall"
    title="代理——代理权授受堂"
    component={AgencyAuthorityHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default AgencyAuthorityHallPlayer;
