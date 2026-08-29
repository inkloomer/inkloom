import {CapitalRegimeVoteHall} from '@/animations/commercial-economic-law/01/capital-regime-vote-hall/remotion/CapitalRegimeVoteHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/capital-regime-vote-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'class-share', number: '01', title: '类别股：章程写明，公开前后两重天', ...SCENES.classShare},
  {id: 'authorized-capital', number: '02', title: '增资双径：股东会与董事会的两张票匣', ...SCENES.authorizedCapital},
  {id: 'reserve-misuse', number: '03', title: '公积金填出资：无效决议与加速到期', ...SCENES.reserveMisuse},
];

export const CapitalRegimeVoteHallPlayer = () => <RemotionDeck animationId="capital-regime-vote-hall" component={CapitalRegimeVoteHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="资本制度：类别股、授权资本与公积金红线" />;
export default CapitalRegimeVoteHallPlayer;
