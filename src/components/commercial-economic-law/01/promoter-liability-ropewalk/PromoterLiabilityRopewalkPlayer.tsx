import {PromoterLiabilityRopewalk} from '@/animations/commercial-economic-law/01/promoter-liability-ropewalk/remotion/PromoterLiabilityRopewalk';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/promoter-liability-ropewalk/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'failure-knot', number: '01', title: '设立失败：三股合缆，对外连带', ...SCENES.failureKnot},
  {id: 'signing-name-fork', number: '02', title: '以谁的名义签约：两条签道', ...SCENES.signingNameFork},
  {id: 'tort-boundary-line', number: '03', title: '缆道之外：个人侵权与私利剪除', ...SCENES.tortBoundary},
];

export const PromoterLiabilityRopewalkPlayer = () => <RemotionDeck animationId="promoter-liability-ropewalk" component={PromoterLiabilityRopewalk} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="发起人责任：失败之缆与签道分流" />;
export default PromoterLiabilityRopewalkPlayer;
