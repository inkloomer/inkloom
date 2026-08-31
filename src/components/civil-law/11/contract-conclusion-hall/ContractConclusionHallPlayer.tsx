import {ContractConclusionHall} from '@/animations/civil-law/11/contract-conclusion-hall/remotion/ContractConclusionHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/11/contract-conclusion-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'offer-acceptance-chain',
    number: '01',
    title: '要约邀请、要约、承诺',
    ...SCENES['offer-acceptance-chain'],
  },
  {
    id: 'bid-auction-ads',
    number: '02',
    title: '招标、拍卖、商业广告',
    ...SCENES['bid-auction-ads'],
  },
  {
    id: 'standard-clauses-court',
    number: '03',
    title: '格式条款',
    ...SCENES['standard-clauses-court'],
  },
  {
    id: 'future-contract-split',
    number: '04',
    title: '未来订立合同的约定',
    ...SCENES['future-contract-split'],
  },
];

export const ContractConclusionHallPlayer = () => (
  <RemotionDeck
    animationId="contract-conclusion-hall"
    title="合同的订立——靛青约签馆"
    component={ContractConclusionHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ContractConclusionHallPlayer;
