import {
  AbsenceProclamationHall,
} from '@/animations/civil-law/02/absence-proclamation-hall/remotion/AbsenceProclamationHall';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/02/absence-proclamation-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'missing-person-bench',
    number: '01',
    title: '寻人公告与失踪宣告',
    ...SCENES['missing-person-bench'],
  },
  {
    id: 'property-custodian-desk',
    number: '02',
    title: '财产代管人',
    ...SCENES['property-custodian-desk'],
  },
  {
    id: 'death-declaration-gate',
    number: '03',
    title: '期间之门与申请阶梯',
    ...SCENES['death-declaration-gate'],
  },
  {
    id: 'death-effects-fork',
    number: '04',
    title: '按死人算与按活人算',
    ...SCENES['death-effects-fork'],
  },
  {
    id: 'rescission-verdict-wall',
    number: '05',
    title: '撤销返还与恶意之罚',
    ...SCENES['rescission-verdict-wall'],
  },
];

export const AbsenceProclamationHallPlayer = () => (
  <RemotionDeck
    animationId="absence-proclamation-hall"
    title="宣告失踪与宣告死亡——空椅公告堂"
    component={AbsenceProclamationHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default AbsenceProclamationHallPlayer;
