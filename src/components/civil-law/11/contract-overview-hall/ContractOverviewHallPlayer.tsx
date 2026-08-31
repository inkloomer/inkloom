import {ContractOverviewHall} from '@/animations/civil-law/11/contract-overview-hall/remotion/ContractOverviewHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/11/contract-overview-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'reward-notice-dais',
    number: '01',
    title: '悬赏广告',
    ...SCENES['reward-notice-dais'],
  },
  {
    id: 'nameless-kindness-pair',
    number: '02',
    title: '无名合同与好意施惠',
    ...SCENES['nameless-kindness-pair'],
  },
  {
    id: 'interpretation-seven-loom',
    number: '03',
    title: '合同的解释',
    ...SCENES['interpretation-seven-loom'],
  },
];

export const ContractOverviewHallPlayer = () => (
  <RemotionDeck
    animationId="contract-overview-hall"
    title="合同概述——绢纱合议馆"
    component={ContractOverviewHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ContractOverviewHallPlayer;
