import {KitchenPassAuthorityWall} from '@/animations/commercial-economic-law/02/kitchen-pass-authority-wall/remotion/KitchenPassAuthorityWall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/02/kitchen-pass-authority-wall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'authority-lane', number: '01', title: '掌勺越权：对外的账，照算', ...SCENES.authorityLane},
  {id: 'seven-matters', number: '02', title: '全票菜单：七件大事与家常菜', ...SCENES.sevenMatters},
  {id: 'expulsion-desk', number: '03', title: '摘帽台：除名事由与四共红线', ...SCENES.expulsionDesk},
];

export const KitchenPassAuthorityWallPlayer = () => <RemotionDeck animationId="kitchen-pass-authority-wall" component={KitchenPassAuthorityWall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="事务执行：掌勺越权、全票菜单与摘帽台" />;
export default KitchenPassAuthorityWallPlayer;
