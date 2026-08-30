import {
  RepresentationAuthorityDesk,
} from '@/animations/civil-law/02/representation-authority-desk/remotion/RepresentationAuthorityDesk';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/02/representation-authority-desk/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'liability-duality',
    number: '01',
    title: '有限与无限责任',
    ...SCENES['liability-duality'],
  },
  {
    id: 'representation-vs-agency',
    number: '02',
    title: '代表代理与签章矩阵',
    ...SCENES['representation-vs-agency'],
  },
  {
    id: 'representative-act-vs-personal',
    number: '03',
    title: '代表行为与个人行为',
    ...SCENES['representative-act-vs-personal'],
  },
  {
    id: 'ultra-vires-representation',
    number: '04',
    title: '越权代表与免决议担保',
    ...SCENES['ultra-vires-representation'],
  },
  {
    id: 'branch-and-split',
    number: '05',
    title: '分支机构与法人分立',
    ...SCENES['branch-and-split'],
  },
];

export const RepresentationAuthorityDeskPlayer = () => (
  <RemotionDeck
    animationId="representation-authority-desk"
    title="法定代表人与越权——法人代表台"
    component={RepresentationAuthorityDesk}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default RepresentationAuthorityDeskPlayer;
