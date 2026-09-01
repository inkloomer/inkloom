import {GiftLoanHall} from '@/animations/civil-law/12/gift-loan-hall/remotion/GiftLoanHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/gift-loan-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'gift-revocation-duo',
    number: '01',
    title: '赠与的两种反悔',
    ...SCENES['gift-revocation-duo'],
  },
  {
    id: 'statutory-revocation',
    number: '02',
    title: '法定撤销的时钟与追回',
    ...SCENES['statutory-revocation'],
  },
  {
    id: 'obligation-condition-order',
    number: '03',
    title: '三种给法的先后',
    ...SCENES['obligation-condition-order'],
  },
  {
    id: 'loan-formation-invalidity',
    number: '04',
    title: '借贷的成立与红灯',
    ...SCENES['loan-formation-invalidity'],
  },
  {
    id: 'loan-interest-rules',
    number: '05',
    title: '利息的推定与红线',
    ...SCENES['loan-interest-rules'],
  },
];

export const GiftLoanHallPlayer = () => (
  <RemotionDeck
    animationId="gift-loan-hall"
    title="赠与借贷——绛红赠贷馆"
    component={GiftLoanHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default GiftLoanHallPlayer;
