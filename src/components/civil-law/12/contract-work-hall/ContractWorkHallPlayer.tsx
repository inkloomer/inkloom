import {ContractWorkHall} from '@/animations/civil-law/12/contract-work-hall/remotion/ContractWorkHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/contract-work-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'contractor-employment-fork',
    number: '01',
    title: '承揽与雇佣的分诊台',
    ...SCENES['contractor-employment-fork'],
  },
  {
    id: 'rescission-trio',
    number: '02',
    title: '三把解除闸刀',
    ...SCENES['rescission-trio'],
  },
  {
    id: 'site-types-forms',
    number: '03',
    title: '发包分包转包三型',
    ...SCENES['site-types-forms'],
  },
  {
    id: 'site-void-causes',
    number: '04',
    title: '工地无效红线图',
    ...SCENES['site-void-causes'],
  },
  {
    id: 'site-price-bidding',
    number: '05',
    title: '无效之后的算账台',
    ...SCENES['site-price-bidding'],
  },
  {
    id: 'site-priority-litigation',
    number: '06',
    title: '优先受偿的金字塔',
    ...SCENES['site-priority-litigation'],
  },
];

export const ContractWorkHallPlayer = () => (
  <RemotionDeck
    animationId="contract-work-hall"
    title="承揽建工——胡桃工地馆"
    component={ContractWorkHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ContractWorkHallPlayer;
