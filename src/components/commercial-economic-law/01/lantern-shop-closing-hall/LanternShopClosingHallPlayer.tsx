import {LanternShopClosingHall} from '@/animations/commercial-economic-law/01/lantern-shop-closing-hall/remotion/LanternShopClosingHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/lantern-shop-closing-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'closing-lane', number: '01', title: '关铺三部曲：散伙、盘点、摘幌', ...SCENES.closingLane},
  {id: 'court-track', number: '02', title: '官司照打：两条清算轨道的分岔', ...SCENES.courtTrack},
  {id: 'simple-deregister', number: '03', title: '简易注销：不盘点直接摘幌，先立保状', ...SCENES.simpleDeregister},
];

export const LanternShopClosingHallPlayer = () => <RemotionDeck animationId="lantern-shop-closing-hall" component={LanternShopClosingHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="公司的消亡：摘幌三部曲与保状注销" />;
export default LanternShopClosingHallPlayer;
