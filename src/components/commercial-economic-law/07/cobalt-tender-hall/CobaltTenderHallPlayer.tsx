import {CobaltTenderHall} from '@/animations/commercial-economic-law/07/cobalt-tender-hall/remotion/CobaltTenderHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/07/cobalt-tender-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'tender-rule', number: '01', title: '30%临界值与强制要约', ...SCENES.tenderRule},
  {id: 'early-warning', number: '02', title: '预警制度：举牌＋慢走', ...SCENES.earlyWarning},
  {id: 'concert-party', number: '03', title: '一致行动人合并计算', ...SCENES.concertParty},
];

export const CobaltTenderHallPlayer = () => <RemotionDeck animationId="cobalt-tender-hall" component={CobaltTenderHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="证券法：上市公司收购" />;
export default CobaltTenderHallPlayer;
