import {DirectorsDeskRuleHall} from '@/animations/commercial-economic-law/01/directors-desk-rule-hall/remotion/DirectorsDeskRuleHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/directors-desk-rule-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'resign-removal', number: '01', title: '董事去留：辞职、解职、超期服役', ...SCENES.resignRemoval},
  {id: 'related-deal', number: '02', title: '关联交易：报告、回避、归入', ...SCENES.relatedDeal},
  {id: 'shadow-director', number: '03', title: '台前幕后：抽逃出资与影子董事', ...SCENES.shadowDirector},
];

export const DirectorsDeskRuleHallPlayer = () => <RemotionDeck animationId="directors-desk-rule-hall" component={DirectorsDeskRuleHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="治理机构：董事去留、关联交易与影子董事" />;
export default DirectorsDeskRuleHallPlayer;
