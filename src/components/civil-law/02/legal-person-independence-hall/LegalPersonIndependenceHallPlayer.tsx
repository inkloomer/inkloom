import {
  LegalPersonIndependenceHall,
} from '@/animations/civil-law/02/legal-person-independence-hall/remotion/LegalPersonIndependenceHall';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/02/legal-person-independence-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'independence-four-pillars',
    number: '01',
    title: '独立性四支柱',
    ...SCENES['independence-four-pillars'],
  },
  {
    id: 'classification-and-foundation',
    number: '02',
    title: '三翼分类与基金会',
    ...SCENES['classification-and-foundation'],
  },
  {
    id: 'registration-and-incubation',
    number: '03',
    title: '登记与设立中法人',
    ...SCENES['registration-and-incubation'],
  },
];

export const LegalPersonIndependenceHallPlayer = () => (
  <RemotionDeck
    animationId="legal-person-independence-hall"
    title="法人的一般规则——独立印章馆"
    component={LegalPersonIndependenceHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default LegalPersonIndependenceHallPlayer;
