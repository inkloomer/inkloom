import {LpLoungeLimitedPartner} from '@/animations/commercial-economic-law/02/lp-lounge-limited-partner/remotion/LpLoungeLimitedPartner';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/02/lp-lounge-limited-partner/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'red-line', number: '01', title: 'LP 红线与约定分层：哪些能禁，哪些不能', ...SCENES.redLine},
  {id: 'four-errors', number: '02', title: '入伙四连问：2017-3-72 全选「错误」项', ...SCENES.fourErrors},
  {id: 'notice-desk', number: '03', title: 'LP 知情权：审计报告与涉己查账', ...SCENES.noticeDesk},
];

export const LpLoungeLimitedPartnerPlayer = () => <RemotionDeck animationId="lp-lounge-limited-partner" component={LpLoungeLimitedPartner} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="有限合伙人：红线、入伙四连问与知情权" />;
export default LpLoungeLimitedPartnerPlayer;
